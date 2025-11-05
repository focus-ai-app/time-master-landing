import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Разработчик",
    avatar: "👨‍💻",
    rating: 5,
    text: "За месяц использования сократил время в Instagram с 3 часов до 30 минут в день! Теперь успеваю гораздо больше и чувствую себя продуктивнее.",
    date: "15 октября 2024",
  },
  {
    name: "Мария Соколова",
    role: "Студентка",
    avatar: "👩‍🎓",
    rating: 5,
    text: "Наконец-то закончила дипломную работу благодаря фокус-сессиям! Раньше постоянно отвлекалась на соцсети, теперь могу концентрироваться по 2 часа подряд.",
    date: "22 октября 2024",
  },
  {
    name: "Дмитрий Волков",
    role: "Предприниматель",
    avatar: "👨‍💼",
    rating: 5,
    text: "Focus изменил мой подход к работе. Детальная статистика показала, что я терял 4 часа в день на бесполезный серфинг. Теперь это время идет на развитие бизнеса!",
    date: "8 ноября 2024",
  },
  {
    name: "Елена Морозова",
    role: "Дизайнер",
    avatar: "👩‍🎨",
    rating: 5,
    text: "Приложение помогло мне найти баланс между работой и личной жизнью. Умные ограничения не дают переработать, а фокус-сессии повышают качество работы.",
    date: "1 ноября 2024",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Что говорят наши пользователи
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь с Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-3xl shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-4 relative z-10">
                "{testimonial.text}"
              </p>

              <p className="text-sm text-muted-foreground">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
