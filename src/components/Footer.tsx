import { Mail, MessageCircle, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Focus
            </h3>
            <p className="text-muted-foreground mb-4">
              Верни контроль над своим временем и вниманием
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-smooth">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-smooth">Цены</a></li>
              <li><a href="#faq" className="hover:text-primary transition-smooth">FAQ</a></li>
              <li><a href="#roadmap" className="hover:text-primary transition-smooth">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-smooth">О нас</a></li>
              <li><a href="#blog" className="hover:text-primary transition-smooth">Блог</a></li>
              <li><a href="#careers" className="hover:text-primary transition-smooth">Карьера</a></li>
              <li><a href="#press" className="hover:text-primary transition-smooth">Пресса</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@focus.app" className="hover:text-primary transition-smooth">
                  support@focus.app
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a href="#chat" className="hover:text-primary transition-smooth">
                  Онлайн-чат
                </a>
              </li>
              <li><a href="#help" className="hover:text-primary transition-smooth">Центр помощи</a></li>
              <li><a href="#status" className="hover:text-primary transition-smooth">Статус сервиса</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-wrap gap-4 justify-center py-8 border-t border-border">
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-6 rounded-xl hover:scale-105 transition-bounce"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Загрузить в</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 px-6 rounded-xl hover:scale-105 transition-bounce"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Доступно в</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </div>
          </Button>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Focus App. Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#privacy" className="hover:text-primary transition-smooth">Политика конфиденциальности</a>
            <span>•</span>
            <a href="#terms" className="hover:text-primary transition-smooth">Условия использования</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-primary transition-smooth">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
