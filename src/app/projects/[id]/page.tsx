const projects = [
  { id: 1, title: '英語版般若心経 翻訳プロジェクト' },
  { id: 2, title: 'フランス語版般若心経 翻訳プロジェクト' },
  { id: 3, title: 'スペイン語版般若心経 翻訳プロジェクト' },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    return <div className="p-8 text-red-600">プロジェクトが見つかりません。</div>;
  }

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">{project.title}</h1>
      <p>このページはプロジェクトの詳細を表示します。</p>
    </main>
  );
}
