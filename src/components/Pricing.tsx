import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const plans = [
  {
    name: "Базовый",
    price: "Бесплатно",
    period: "навсегда",
    description: "Для начала работы с Focus",
    features: [
      "Треккинг 3 приложений",
      "Общая статистика",
      "Базовые отчеты",
      "Мобильное приложение",
    ],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Профи",
    price: "399₽",
    period: "в месяц",
    description: "Для серьезного контроля времени",
    features: [
      "Неограниченный треккинг",
      "Детальная аналитика",
      "Умные ограничения",
      "Фокус-сессии",
      "Экспорт данных",
      "Приоритетная поддержка",
    ],
    cta: "Попробовать 7 дней бесплатно",
    popular: true,
  },
  {
    name: "Максимум",
    price: "3 990₽",
    period: "в год",
    description: "Лучшее предложение для продуктивности",
    features: [
      "Все функции Премиум",
      "Персональные рекомендации",
      "AI-анализ привычек",
      "Интеграции с другими сервисами",
      "Семейный доступ (до 5 человек)",
      "Эксклюзивные функции",
    ],
    cta: "Сэкономить 17%",
    popular: false,
    badge: "Выгодно",
  },
];

const Pricing = () => {
  const handleSelect = (planName: string) => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Выберите свой план
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Начните с бесплатного тарифа или получите полный доступ ко всем функциям
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-smooth animate-scale-in ${
                plan.popular ? "ring-2 ring-primary scale-105 md:scale-110" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <div className="text-muted-foreground">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSelect(plan.name)}
                className={`w-full h-12 font-semibold ${
                  plan.popular
                    ? "gradient-primary hover:opacity-90"
                    : "bg-secondary hover:bg-secondary/90"
                } transition-smooth`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
