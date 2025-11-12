import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Target, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { getStoreLinks, submitLead } from "@/lib/lead";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const storeLinks = useMemo(() => getStoreLinks(), []);

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
        plan: formData.plan,
        source: "hero",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Target className="w-4 h-4" />
              <span className="text-sm">Инструмент контроля внимания и времени</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Focus: Верни контроль над своим временем
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90">
              Приложение, которое помогает бороться с цифровой зависимостью и повышать продуктивность
            </p>
            
            {/* Install buttons surfaced to the top */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="secondary"
                size="lg"
                className="h-12 px-6 rounded-xl hover:scale-105 transition-bounce"
                asChild
              >
                <a
                  href={storeLinks.appStore || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!storeLinks.appStore}
                >
                  <span className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </span>
                  Загрузить в App Store
                </a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="h-12 px-6 rounded-xl hover:scale-105 transition-bounce"
                asChild
              >
                <a
                  href={storeLinks.googlePlay || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!storeLinks.googlePlay}
                >
                  <span className="mr-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </span>
                  Доступно в Google Play
                </a>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>Анализируй, ограничивай, фокусируйся.</strong> Узнай, куда уходит твое внимание, и получи его назад
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold">67%</div>
                <div className="text-sm text-white/80">Меньше соцсетей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm text-white/80">Больше фокуса</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3ч</div>
                <div className="text-sm text-white/80">Экономии в день</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Запишитесь в ранний доступ
                </h2>
                <p className="text-muted-foreground">
                  Получите ранний доступ к Focus и первыми протестируйте новые функции
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 text-base"
                  />
                </div>
                                
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон (необязательно)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <Select
                    value={formData.plan}
                    onValueChange={(value) => setFormData({ ...formData, plan: value })}
                  >
                    <SelectTrigger className="h-12 text-base" aria-required="true">
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
                  className="w-full h-14 text-lg font-semibold gradient-primary hover:opacity-90 transition-smooth"
                >
                  {isSubmitting ? "Отправка..." : "Оставить заявку"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Места ограничены • Приоритетный доступ к новой версии
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
