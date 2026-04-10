'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type StageStatus = 'running' | 'completed' | 'failed';

interface StageCardProps {
  stage: string;
  status: StageStatus;
  content?: string;
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

function StatusIcon({ status }: { status: StageStatus }) {
  if (status === 'running') {
    return (
      <span className="inline-block w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
    );
  }
  if (status === 'completed') {
    return <span className="text-green-600 font-bold">✓</span>;
  }
  return <span className="text-red-600 font-bold">✗</span>;
}

const BG: Record<StageStatus, string> = {
  running: 'bg-gray-50 border-gray-200',
  completed: 'bg-green-50 border-green-200',
  failed: 'bg-red-50 border-red-200',
};

const STAGE_LABELS: Record<string, string> = {
  idea: 'Idea',
  research: 'Research',
  draft: 'Draft',
  edit: 'Edit',
  seo: 'SEO Check',
  publish: 'Publish',
};

export function StageCard({ stage, status, content }: StageCardProps) {
  const [expanded, setExpanded] = useState(false);

  const lines = content?.split('\n') ?? [];
  const isLong = lines.length > 3;
  const preview = lines.slice(0, 3).join('\n');

  return (
    <div className={`border rounded-lg p-4 transition-colors ${BG[status]}`}>
      <div className="flex items-center gap-2 mb-2">
        <StatusIcon status={status} />
        <span className="font-semibold text-sm capitalize">
          {STAGE_LABELS[stage] ?? stage}
        </span>
        <span className="ml-auto text-xs text-gray-500">{status}</span>
      </div>

      {content && (
        <div className="mt-2 text-sm">
          <ReactMarkdown components={markdownComponents}>
            {expanded || !isLong ? content : preview + '\n…'}
          </ReactMarkdown>
          {isLong && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-1 text-xs text-blue-600 hover:underline"
            >
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
