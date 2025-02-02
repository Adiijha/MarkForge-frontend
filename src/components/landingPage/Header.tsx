import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-16">
        <Link to="/">
        <h1 className="text-3xl font-bold tracking-wide">MarkForge</h1>
        </Link>
        <nav className="hidden md:flex space-x-6 border-2 px-10 py-4 rounded-full bg-white/5 shadow-md shadow-gray-200">
          <a href="#features" className="hover:text-gray-400">Features</a>
          <a href="#how-it-works" className="hover:text-gray-400">How It Works</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
        <button className="bg-white text-black px-6 border-2 border-white py-2.5 hover:shadow-md hover:shadow-white rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
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
