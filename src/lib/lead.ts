export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  plan?: string;
  source?: string;
};

function getEnv(name: string): string | undefined {
  const value = import.meta.env[name as keyof ImportMetaEnv] as unknown as string | undefined;
  if (value && typeof value === "string" && value.trim().length > 0) {
    return value;
  }
  return undefined;
}

function getBooleanEnv(name: string, defaultValue = false): boolean {
  const raw = getEnv(name);
  if (raw === undefined) return defaultValue;
  return ["1", "true", "yes", "on"].includes(raw.toLowerCase());
}

export function getSubmissionEndpoint(): string | undefined {
  return (
    getEnv("VITE_GOOGLE_SCRIPT_URL") ||
    getEnv("VITE_FORM_ENDPOINT") ||
    undefined
  );
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const endpoint = getSubmissionEndpoint();
  if (!endpoint) {
    throw new Error("Submission endpoint is not configured. Set VITE_GOOGLE_SCRIPT_URL.");
  }

  const useNoCors = getBooleanEnv("VITE_FORM_USE_NO_CORS", false);

  if (useNoCors) {
    // Fallback mode to bypass CORS: send FormData without custom headers.
    // Response will be opaque; we assume success if fetch doesn't throw.
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    if (payload.phone) formData.append("phone", payload.phone);
    if (payload.plan) formData.append("plan", payload.plan);
    if (payload.source) formData.append("source", payload.source);
    formData.append("timestamp", new Date().toISOString());

    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    return;
  } else {
    // Preferred mode: JSON with proper CORS enabled on the server.
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      let message = `Request failed with status ${response.status}`;
      try {
        const data = await response.json();
        if (data && (data.message || data.error)) {
          message = data.message || data.error;
        }
      } catch {
        // ignore parse errors
      }
      throw new Error(message);
    }
  }
}

export function getStoreLinks(): { appStore?: string; googlePlay?: string } {
  return {
    appStore: getEnv("VITE_APPSTORE_URL"),
    googlePlay: getEnv("VITE_GOOGLEPLAY_URL"),
  };
}


