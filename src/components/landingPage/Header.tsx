import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-wide">MarkForge</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-gray-400">Features</a>
          <a href="#how-it-works" className="hover:text-gray-400">How It Works</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300">
          Get Started
        </button>
        <button className="md:hidden">
          <Menu className="text-white w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
