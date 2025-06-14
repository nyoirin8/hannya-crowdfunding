// src/app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';

const projects = [
  { id: 1, title: '英語版般若心経 翻訳プロジェクト' },
  { id: 2, title: 'フランス語版般若心経 翻訳プロジェクト' },
  { id: 3, title: 'スペイン語版般若心経 翻訳プロジェクト' },
];

export default async function ProjectDetailPage({ params }: any) {
  const projectId = parseInt(params.id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">{project.title}</h1>
      <p>このページはプロジェクトの詳細を表示します。</p>
    </main>
  );
}
