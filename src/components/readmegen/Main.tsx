import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Pencil, Eye } from "lucide-react";

const defaultProfileReadme = `# 🚀 Welcome to My GitHub Profile!

## 📝 About Me
- 🔭 I’m currently working on **cool projects**
- 🌱 I’m learning **JavaScript, React, and more**
- 💬 Ask me about **Web Development**
- 📫 How to reach me: [Your Email or Social Links]

## 📊 GitHub Stats
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=dark)

## 🛠 Skills
- **Languages:** JavaScript, TypeScript, C++
- **Frameworks:** React, Next.js, Node.js
- **Tools:** Git, VS Code, Docker
`;

const Main = () => {
  const [readmeContent, setReadmeContent] = useState(defaultProfileReadme);
  const [isEditing, setIsEditing] = useState(true); // Toggle between Edit & Preview

  return (
    <div className="p-8 bg-black text-white min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-6">Profile README Generator</h1>

      {/* Toggle Button */}
      <div className="flex justify-center mb-4">
        <button
          className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg shadow-md text-white 
          hover:bg-gray-700 transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <Eye className="w-5 h-5" /> : <Pencil className="w-5 h-5" />}
          {isEditing ? "Preview" : "Edit"}
        </button>
      </div>

      {/* Toggle Between Editor & Preview */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 flex-1">
        {isEditing ? (
          <textarea
            className="w-full h-[70vh] p-4 bg-gray-800 text-white rounded-lg resize-none border border-gray-700 outline-none 
            focus:border-blue-500 shadow-lg transition-all"
            value={readmeContent}
            onChange={(e) => setReadmeContent(e.target.value)}
          />
        ) : (
          <div className="prose prose-invert max-w-full overflow-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ src, alt }) => (
                  <div className="flex justify-center my-4">
                    <img src={src || ""} alt={alt || ""} className="max-w-full rounded-lg shadow-lg" />
                  </div>
                ),
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-4 text-center">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold mt-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium mt-2">{children}</h3>,
                p: ({ children }) => <p className="text-gray-300 text-lg leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside ml-5">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside ml-5">{children}</ol>,
                li: ({ children }) => <li className="text-gray-300 text-lg">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-400">{children}</blockquote>
                ),
                table: ({ children }) => <table className="w-full border-collapse border border-gray-700">{children}</table>,
                thead: ({ children }) => <thead className="bg-gray-700 text-white">{children}</thead>,
                tbody: ({ children }) => <tbody className="bg-gray-800">{children}</tbody>,
                tr: ({ children }) => <tr className="border-b border-gray-700">{children}</tr>,
                th: ({ children }) => <th className="px-4 py-2 text-left font-semibold">{children}</th>,
                td: ({ children }) => <td className="px-4 py-2">{children}</td>,
                code: ({ children }) => (
                  <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">{children}</code>
                ),
              }}
            >
              {readmeContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
