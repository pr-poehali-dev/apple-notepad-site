
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Извините, мы не смогли найти страницу, которую вы искали. Возможно, она была перемещена или удалена.
        </p>
        <div className="flex justify-center">
          <Button asChild>
            <Link to="/">
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
