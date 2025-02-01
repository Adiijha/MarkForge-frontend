import { useState } from "react";
import { Pencil } from "lucide-react";

const Editor = ({ content, onChange }: { content: string; onChange: (text: string) => void }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 relative h-full flex flex-col">
      <h2 className="text-white text-lg font-semibold flex items-center gap-2">
        <Pencil className="w-5 h-5 text-gray-400" /> Edit Your README
      </h2>

      <textarea
        className={`flex-1 w-full p-4 mt-4 bg-gray-800 text-white rounded-lg resize-none border border-gray-700 outline-none 
        transition-all duration-300 overflow-auto
        ${
          isFocused ? "border-blue-500 shadow-lg shadow-blue-500/20" : "focus:border-gray-500"
        }`}
        value={content}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Editor;
