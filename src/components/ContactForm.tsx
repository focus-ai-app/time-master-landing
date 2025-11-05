import { useState } from "react";
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Отлично! Проверьте email для начала пробного периода.");
    setFormData({ name: "", email: "", plan: "" });
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 lg:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-4xl font-bold mb-4">
                Начни свой путь к продуктивности сегодня!
              </h2>
              <p className="text-xl text-muted-foreground">
                Получите 7-дневный бесплатный доступ ко всем функциям
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
                className="w-full h-16 text-lg font-semibold gradient-primary hover:opacity-90 transition-smooth shadow-glow"
              >
                Начать 7-дневный пробный период
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Без обязательств • Отмена в любое время • Поддержка 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
