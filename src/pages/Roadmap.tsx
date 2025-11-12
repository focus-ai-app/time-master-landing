import { ArrowLeft, Calendar, CheckCircle2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const roadmap = [
  {
    week: "Неделя 1",
    title: "Бэкенд, учетные записи и ИИ-интеграция",
    goals: [
      "Подключаем Firebase (аутентификация, база данных, облачные функции)",
      "Настраиваем вход через Google и Apple",
      "Подключаем ИИ-сервис и определяем правила работы с ним",
      "Создаем структуру базы данных для пользователей, целей, блокируемых приложений и истории взаимодействий с ИИ",
    ],
    outcome:
      "Пользователь может войти, а приложение уже умеет отправлять запросы в ИИ и получать ответы безопасно.",
  },
  {
    week: "Неделя 2",
    title: "Основные экраны и ИИ-помощник",
    goals: [
      "Собираем приложение на Flutter: онбординг, вход/регистрация",
      "Главный экран: список целей и кнопка «Новая цель»",
      "Экран создания цели с ИИ-подсказками (SMART-формулировки, доработка, переформулировки)",
      "Экран блокировки приложений и времени, статическая лента контента, профиль со статистикой",
    ],
    outcome:
      "Полностью рабочий интерфейс с интеграцией ИИ для постановки целей.",
  },
  {
    week: "Неделя 3",
    title: "Блокировка, контент и персонализация",
    goals: [
      "Android: используем системные API для блокировки отвлекающих приложений",
      "iOS: интегрируемся с Screen Time API (режим «Фокус»)",
      "Загружаем библиотеку контента (150–200 материалов) с тематическими тегами",
      "Добавляем ИИ-подбор контента и трекинг прогресса по целям",
    ],
    outcome:
      "Приложение блокирует отвлечения, ставит умные цели с ИИ и показывает релевантный контент.",
  },
  {
    week: "Неделя 4",
    title: "Тестирование, оптимизация и сборки",
    goals: [
      "Тестируем на 5–7 устройствах (Android и iPhone)",
      "Проверяем стабильность ИИ-генерации, блокировок и сохранения данных",
      "Исправляем UX-баги, добавляем состояния загрузки",
      "Собираем APK и версию для TestFlight, подключаем аналитику использования ИИ и целей",
    ],
    outcome:
      "Готовое, стабильное приложение с ИИ, которое можно тестировать и использовать ежедневно.",
  },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 space-y-12">
        <Button variant="ghost" className="gap-2" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Назад на главную
          </Link>
        </Button>

        <section className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Цель: готовое приложение к тестированию</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Дорожная карта Focus: путь к раннему доступу
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы создаем приложение, вдохновленное Forest, AppBlock и Freedom — c упором на умные цели,
            ИИ-поддержку и персонализированный контент. В отличие от привычных блокираторов мы помогаем
            сформулировать реалистичные результаты, разработать план, исключить отвлекающие факторы и
            закрепить прогресс.
          </p>
          <div className="bg-card border border-border rounded-3xl p-6 shadow-card space-y-4">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Фокус дорожной карты</h2>
                <p className="text-muted-foreground">
                  За 4 недели собрать стабильную версию приложения с ИИ-ассистентом, блокировкой отвлечений
                  и персонализированным контентом, чтобы передать его ранним пользователям на тестирование.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          {roadmap.map((item, index) => (
            <div
              key={item.week}
              className="bg-card border border-border rounded-3xl shadow-card p-6 lg:p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-3 lg:max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                    <span>{item.week}</span>
                    <span className="opacity-50">•</span>
                    <span>{item.title}</span>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    {item.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:max-w-sm">
                  <h3 className="text-sm uppercase tracking-wide text-primary font-semibold mb-2">
                    Результат недели
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold">Хотите присоединиться к раннему доступу?</h2>
          <p className="text-lg text-white/80">
            Мы открываем ранний доступ по мере готовности ключевых этапов. Оставьте заявку, и мы пригласим вас
            протестировать Focus одним из первых.
          </p>
          <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90 transition-smooth" asChild>
            <a href="/time-master-landing/#contact-form">Оставить заявку</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Roadmap;


