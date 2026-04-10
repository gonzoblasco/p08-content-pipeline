'use client';

import ReactMarkdown from 'react-markdown';

interface OutputViewerProps {
  content: string;
  filename: string;
}

const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => <h1 className="text-xl font-bold mt-4 mb-2">{children}</h1>,
  h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-lg font-semibold mt-3 mb-2">{children}</h2>,
  h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-base font-semibold mt-2 mb-1">{children}</h3>,
  p: ({ children }: { children?: React.ReactNode }) => <p className="mb-2 leading-relaxed">{children}</p>,
  ul: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc pl-5 mb-2 space-y-1">{children}</ul>,
  ol: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal pl-5 mb-2 space-y-1">{children}</ol>,
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold">{children}</strong>,
  blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2 text-gray-600">{children}</blockquote>,
  hr: () => <hr className="my-3 border-gray-200" />,
  code: ({ children }: { children?: React.ReactNode }) => <code className="bg-gray-100 px-1 rounded text-sm font-mono">{children}</code>,
};

export function OutputViewer({ content, filename }: OutputViewerProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-700">Output final</span>
        <button
          onClick={handleDownload}
          className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Descargar .md
        </button>
      </div>
      <div className="p-4">
        <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
