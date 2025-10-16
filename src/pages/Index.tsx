import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const advantages = [
    {
      icon: "Factory",
      title: "Современное производство",
      description: "Высокотехнологичное оборудование и автоматизированные линии"
    },
    {
      icon: "Award",
      title: "Сертификация ISO",
      description: "Полное соответствие международным стандартам качества"
    },
    {
      icon: "Clock",
      title: "Оперативные сроки",
      description: "Производство и отгрузка продукции точно в срок"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Многоступенчатый контроль на всех этапах производства"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Промышленное оборудование",
      category: "Категория A",
      image: "https://cdn.poehali.dev/projects/79129232-dc94-4e82-9f1e-182be9e0c810/files/db8bd37a-9023-45c9-8143-5f4ecf4f14bb.jpg",
      description: "Высокотехнологичное производственное оборудование"
    },
    {
      id: 2,
      name: "Производственные линии",
      category: "Категория B",
      image: "https://cdn.poehali.dev/projects/79129232-dc94-4e82-9f1e-182be9e0c810/files/85735acf-6402-43b5-bb4a-cdc4f94906d8.jpg",
      description: "Комплексные решения для автоматизации производства"
    },
    {
      id: 3,
      name: "Металлоизделия",
      category: "Категория C",
      image: "https://cdn.poehali.dev/projects/79129232-dc94-4e82-9f1e-182be9e0c810/files/93dd37e3-b619-49cb-8835-e27e29485150.jpg",
      description: "Качественные металлические компоненты и детали"
    }
  ];

  const certificates = [
    { name: "ISO 9001:2015", desc: "Система менеджмента качества" },
    { name: "ISO 14001:2015", desc: "Экологический менеджмент" },
    { name: "ISO 45001:2018", desc: "Охрана труда и безопасность" },
    { name: "ГОСТ Р", desc: "Соответствие государственным стандартам" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={28} className="text-primary" />
            <span className="text-xl font-bold text-primary">ПромТех</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-sm font-medium hover:text-primary transition-colors">
              Сертификаты
            </button>
          </div>
          <Button>Связаться</Button>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Производственные решения высшего качества
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Современное производство промышленного оборудования и металлоизделий. 
                Полный цикл от разработки до внедрения. Сертифицированное качество.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')}>
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  О компании
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="advantages" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Наши преимущества</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Мы обеспечиваем высочайший уровень производства благодаря современным технологиям и профессиональной команде
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={adv.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{adv.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{adv.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">ПромТех</strong> — ведущий производитель промышленного оборудования 
                    и металлоизделий с более чем 15-летним опытом работы на российском рынке.
                  </p>
                  <p>
                    Наша компания специализируется на разработке и производстве высокотехнологичного 
                    оборудования для различных отраслей промышленности. Мы предлагаем полный цикл услуг: 
                    от проектирования до монтажа и сервисного обслуживания.
                  </p>
                  <p>
                    Производственные мощности оснащены современным оборудованием, что позволяет нам 
                    выполнять заказы любой сложности с соблюдением самых строгих стандартов качества.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Постоянных клиентов</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/79129232-dc94-4e82-9f1e-182be9e0c810/files/85735acf-6402-43b5-bb4a-cdc4f94906d8.jpg" 
                  alt="Производство" 
                  className="rounded-lg w-full h-[500px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Каталог продукции</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Широкий ассортимент промышленного оборудования и металлоизделий для различных отраслей
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{product.description}</CardDescription>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Сертификаты качества</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Наша продукция соответствует международным и национальным стандартам качества
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certificates.map((cert, idx) => (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{cert.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <Button size="lg" variant="secondary">
              Связаться с нами
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <span className="text-lg font-bold text-primary">ПромТех</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Производственная компания полного цикла
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition-colors">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('certificates')} className="hover:text-primary transition-colors">Сертификаты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категория A</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категория B</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@promtech.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 ПромТех. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
