import { Activity, BarChart3, Shield, Timer, Trophy } from "lucide-react";

const steps = [
  {
    icon: Activity,
    title: "Треккинг времени",
    description: "Автоматический анализ активности в приложениях и сайтах. Focus отслеживает, куда уходит ваше внимание в течение дня.",
  },
  {
    icon: BarChart3,
    title: "Детальная статистика",
    description: "Визуализация данных и отчеты по продуктивности. Получите полную картину своих цифровых привычек.",
  },
  {
    icon: Shield,
    title: "Умные ограничения",
    description: "Настройка лимитов для отвлекающих приложений. Система напоминаний поможет не превысить установленные границы.",
  },
  {
    icon: Timer,
    title: "Фокус-сессии",
    description: "Таймеры для глубокой работы без отвлечений. Метод Pomodoro и другие техники концентрации в одном приложении.",
  },
  {
    icon: Trophy,
    title: "Прогресс и мотивация",
    description: "Отслеживание улучшений и достижение целей. Система наград и статистика прогресса помогут оставаться мотивированным.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простая и эффективная система для контроля вашего времени
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-6 items-start group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-smooth">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Connection Line */}
        <div className="max-w-4xl mx-auto relative -mt-8 mb-8">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
