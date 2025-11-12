import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как Focus отслеживает мою активность?",
    answer: "Focus использует безопасные системные API для мониторинга времени, проведенного в приложениях. Мы не читаем содержимое ваших сообщений или документов - только замеряем время использования. Все данные хранятся локально на вашем устройстве и защищены шифрованием.",
  },
  {
    question: "Можно ли использовать Focus на нескольких устройствах?",
    answer: "Да! При подписке на тарифы Премиум или Максимум ваши данные синхронизируются между всеми устройствами через облако. Это позволяет получить полную картину использования времени на компьютере, телефоне и планшете.",
  },
  {
    question: "Что делать, если я превышу лимит времени?",
    answer: "Focus отправит вам уведомление за 5 минут до окончания лимита. После превышения вы можете настроить строгую блокировку приложения или получать напоминания. Также есть возможность добавить дополнительное время для важных задач.",
  },
  {
    question: "Можно ли отменить подписку в любой момент?",
    answer: "Конечно! Вы можете отменить подписку в любое время через настройки приложения или личный кабинет. Доступ к премиум-функциям сохранится до конца оплаченного периода. Никаких скрытых платежей или обязательств.",
  },
  {
    question: "Какие приложения можно отслеживать?",
    answer: "Focus поддерживает все популярные приложения и сайты: социальные сети, мессенджеры, браузеры, игры, рабочие инструменты. На тарифе Премиум количество отслеживаемых приложений неограничено.",
  },
  {
    question: "Есть ли семейный доступ?",
    answer: "Да, тариф Максимум включает доступ для 5 членов семьи. Каждый получает свой профиль с индивидуальной статистикой и настройками. Это отличный способ помочь всей семье развить здоровые цифровые привычки.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о Focus
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-card border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
