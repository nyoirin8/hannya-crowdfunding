async function ProjectsPage() {
  const res = await fetch('/api/projects');
  const projects = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold mb-4">翻訳プロジェクト一覧</h1>
      <ul className="list-disc pl-5">
        {projects.map((project: any) => (
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

export default ProjectsPage;
