// src/app/projects/[id]/page.tsx

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">プロジェクトID: {params.id}</h1>
      <p>ここにプロジェクトの詳細が入ります。</p>
    </main>
  );
}
