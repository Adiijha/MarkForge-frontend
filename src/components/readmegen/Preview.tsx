import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // Allows HTML rendering inside Markdown
import { Eye } from "lucide-react";

const Preview = ({ content }: { content: string }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 max-w-4xl mx-auto mt-6">
      <h2 className="text-white text-lg font-semibold flex items-center gap-2">
        <Eye className="w-5 h-5 text-gray-400" /> README Preview
      </h2>

      <div className="bg-gray-800 p-6 mt-4 rounded-lg text-white border border-gray-700 overflow-auto shadow-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold text-center mt-8 mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-lg leading-relaxed mt-4 mb-2">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mt-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mt-4">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-lg mb-2">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="bg-gray-700 p-4 rounded-lg text-lg italic mt-6 border-l-4 border-blue-500">
                {children}
              </blockquote>
            ),
            img: ({ src, alt }) => (
              <div className="my-6 flex justify-center">
                <img
                  src={src || ""}
                  alt={alt || ""}
                  className="max-w-max h-auto rounded-lg shadow-md"
                />
              </div>
            ),
            table: ({ children }) => (
              <table className="table-auto mt-6 mb-4 text-sm">{children}</table>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-700 text-white">{children}</thead>
            ),
            tbody: ({ children }) => (
              <tbody className="bg-gray-800">{children}</tbody>
            ),
            tr: ({ children }) => (
              <tr className="border-b border-gray-600">{children}</tr>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2 text-left font-semibold">{children}</th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 text-gray-300">{children}</td>
            ),
            code: ({ children }) => (
              <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">{children}</code>
            ),
            hr: () => <hr className="border-t-2 border-gray-600 my-4" />,
            a: ({ href, children }) => (
              <a
                href={href || "#"}
                className="text-blue-400 hover:text-blue-600 underline"
              >
                {children}
              </a>
            ),
            div: ({ children }) => (
              <div className="text-center mt-6">{children}</div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;
