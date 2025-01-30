import { Pencil, Settings, Download } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <Pencil className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">1. Enter Project Details</h3>
            <p className="mt-2 text-gray-400">Provide name, description, and tech stack.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <Settings className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">2. Customize Your README</h3>
            <p className="mt-2 text-gray-400">Select templates and adjust formatting.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <Download className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">3. Generate & Download</h3>
            <p className="mt-2 text-gray-400">Preview and download your README file.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
