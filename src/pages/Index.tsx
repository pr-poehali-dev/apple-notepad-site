
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Apple } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      {/* Шапка */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Apple className="text-red-500 h-6 w-6" />
            <span className="text-xl font-bold text-red-600">ЯблокоМир</span>
          </div>
          <nav className="flex gap-6">
            <Link to="/" className="text-red-600 hover:text-red-800">Главная</Link>
            <Link to="/about" className="text-gray-600 hover:text-red-800">О яблоках</Link>
            <Link to="/varieties" className="text-gray-600 hover:text-red-800">Сорта</Link>
          </nav>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
            Яблоко - королевский фрукт
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Узнайте всё о самом популярном фрукте на планете: полезные свойства, 
            разнообразие сортов и удивительные факты.
          </p>
          <div className="flex gap-4">
            <Button className="bg-red-600 hover:bg-red-700">Узнать больше</Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Сорта яблок
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Красное яблоко" 
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* Раздел с преимуществами */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-10">
            Почему яблоки полезны
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Для сердца</h3>
              <p className="text-gray-700">
                Регулярное употребление яблок снижает риск сердечно-сосудистых заболеваний.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Для мозга</h3>
              <p className="text-gray-700">
                Антиоксиданты в яблоках помогают улучшить когнитивные функции.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Для иммунитета</h3>
              <p className="text-gray-700">
                Витамин C и другие питательные вещества укрепляют иммунную систему.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел популярные сорта */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-10">
          Популярные сорта яблок
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appleVarieties.map((variety, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-red-100 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt={variety.name} 
                  className="h-32 w-32 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-red-700 mb-2">{variety.name}</h3>
                <p className="text-gray-700 mb-3">{variety.description}</p>
                <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                  Узнать больше →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Apple className="h-5 w-5" />
                <span className="text-lg font-bold">ЯблокоМир</span>
              </div>
              <p className="text-red-100 max-w-md">
                Ваш надежный источник информации о яблоках, их пользе и разнообразии.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Ссылки</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-red-100 hover:text-white">Главная</Link></li>
                  <li><Link to="/about" className="text-red-100 hover:text-white">О яблоках</Link></li>
                  <li><Link to="/varieties" className="text-red-100 hover:text-white">Сорта</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Контакты</h4>
                <address className="not-italic text-red-100">
                  <p>Email: info@applesworld.ru</p>
                  <p>Тел: +7 (123) 456-78-90</p>
                </address>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-600 mt-8 pt-6 text-center text-red-100">
            <p>© {new Date().getFullYear()} ЯблокоМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные о сортах яблок
const appleVarieties = [
  {
    name: "Антоновка",
    description: "Легендарный русский сорт с кисло-сладким вкусом и ярким ароматом."
  },
  {
    name: "Голден Делишес",
    description: "Сладкие желтые яблоки с хрустящей мякотью и нежным вкусом."
  },
  {
    name: "Гренни Смит",
    description: "Ярко-зеленые яблоки с кислым освежающим вкусом."
  }
];

export default Index;
