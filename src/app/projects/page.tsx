// src/app/projects/page.tsx
const projects = [
  { id: 1, title: '英語版般若心経 翻訳プロジェクト' },
  { id: 2, title: 'フランス語版般若心経 翻訳プロジェクト' },
  { id: 3, title: 'スペイン語版般若心経 翻訳プロジェクト' },
];

export default async function ProjectListPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">プロジェクト一覧</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`/projects/${project.id}`} className="text-blue-600 underline">
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
