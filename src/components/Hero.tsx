import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-focus.jpg";
import { toast } from "sonner";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "" });
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
                  Попробуй бесплатно
                </h2>
                <p className="text-muted-foreground">
                  Начни свой путь к продуктивности сегодня
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold gradient-primary hover:opacity-90 transition-smooth"
                >
                  Попробовать бесплатно
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                7 дней бесплатно • Без кредитной карты
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
