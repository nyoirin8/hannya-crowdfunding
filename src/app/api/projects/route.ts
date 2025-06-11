import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    { id: 1, title: '英語版般若心経 翻訳プロジェクト' },
    { id: 2, title: 'フランス語版般若心経 翻訳プロジェクト' },
    { id: 3, title: 'スペイン語版般若心経 翻訳プロジェクト' },
  ];

  return NextResponse.json(projects);
}
