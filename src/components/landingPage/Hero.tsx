import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black text-white py-24 flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Generate Stunning <span className="text-gray-400">README</span> Files
        </h1>
        <p className="text-lg mt-4 text-gray-400 max-w-xl drop-shadow-md">
          MarkForge makes it easy to create professional, well-structured README files for your projects with just a few clicks.
        </p>

        {/* Call-to-Action Button */}
        <Link to="/generate">
        <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition font-semibold">
          Generate Now
        </button>
        </Link>

        {/* Image Preview with Gradient, Blur, and Shadows */}
        <div className="mt-10 relative w-full max-w-2xl">
          {/* Div with Gradient, Blur, and Shadows */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://via.placeholder.com/800x450" // Placeholder image
              alt="README Preview"
              className="w-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            {/* Blur and Glassmorphism Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg"></div>
          </div>

          {/* Floating Lucide Icon */}
          <div className="absolute -top-6 right-8 bg-white bg-opacity-10 p-4 rounded-full shadow-lg backdrop-blur-lg">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
