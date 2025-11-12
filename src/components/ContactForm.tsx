import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rocket } from "lucide-react";
import { toast } from "sonner";
import { submitLead } from "@/lib/lead";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.plan) {
      toast.error("Пожалуйста, выберите тариф.");
      return;
    }
    try {
      setIsSubmitting(true);
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        plan: formData.plan || undefined,
        source: "contact-form",
      });
      toast.success("Заявка принята! Мы свяжемся с вами перед стартом раннего доступа.");
      setFormData({ name: "", email: "", phone: "", plan: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Не удалось отправить форму. Попробуйте позже.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 lg:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-bold mb-4">
                Присоединяйтесь к раннему доступу
              </h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и первыми протестируйте Focus
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-14 text-base"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-14 text-base"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Телефон (необязательно)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 text-base"
                />
              </div>

              <div>
                <Select
                  value={formData.plan}
                  onValueChange={(value) => setFormData({ ...formData, plan: value })}
                >
                  <SelectTrigger className="h-14 text-base">
                    <SelectValue placeholder="Выберите тариф" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Базовый (Бесплатно)</SelectItem>
                    <SelectItem value="premium">Профи (399₽/мес)</SelectItem>
                    <SelectItem value="yearly">Максимум (3 990₽/год)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-16 text-lg font-semibold gradient-primary hover:opacity-90 transition-smooth shadow-glow"
              >
                {isSubmitting ? "Отправка..." : "Оставить заявку"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Мы свяжемся с вами, когда запустим закрытое тестирование
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
