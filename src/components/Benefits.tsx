import { TrendingDown, Focus, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    metric: "67%",
    title: "Снижение времени в соцсетях",
    description: "В среднем за 2 недели использования приложения",
    color: "text-primary",
  },
  {
    icon: Focus,
    metric: "40%",
    title: "Увеличение концентрации",
    description: "Период глубокой фокусировки становится дольше",
    color: "text-secondary",
  },
  {
    icon: Clock,
    metric: "3 часа",
    title: "Экономия времени в день",
    description: "За счет устранения цифрового мусора",
    color: "text-accent",
  },
  {
    icon: Target,
    metric: "89%",
    title: "Достижение целей",
    description: "Пользователей выполняют свои ежедневные задачи",
    color: "text-primary",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Измеримые результаты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи пользователей уже изменили свою жизнь с помощью Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${benefit.color} mb-6`}>
                <benefit.icon className="w-12 h-12" />
              </div>
              
              <div className="text-5xl font-bold mb-2 text-accent">
                {benefit.metric}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
