'use client';

import { useState } from 'react';

export default function FlexboxPage() {
  // Függőleges igazítás
  const VerticalAlign: { label: string; value: string }[] = [
    { label: 'Top', value: 'items-start' },
    { label: 'Center', value: 'items-center' },
    { label: 'Bottom', value: 'items-end' },
  ];

  const [vertical, setVerical] = useState<string>('items-start');

  // Vízszintes igazítás
  //   const HorizontalAlign: { label: string; value: string }[] = [
  //     { label: 'Left', value: 'justify-start' },
  //     { label: 'Center', value: 'justify-center' },
  //     { label: 'Right', value: 'justify-end' },
  //     { label: 'Space Between', value: 'justify-between' },
  //     { label: 'Space Around', value: 'justify-around' },
  //   ];

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-wrap justify-center gap-4 bg-green-500">
        <h1>Vertical alignment</h1>
        {VerticalAlign.map((align) => (
          <button
            key={align.value}
            className="btn btn-primary"
            onClick={() => setVerical(align.value)}
          >
            {align.label}
          </button>
        ))}
      </nav>
      <main className={`flex h-100 w-full flex-wrap bg-yellow-100 ${vertical}`}>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            className="flex h-24 w-24 items-center justify-center rounded-xl border bg-amber-600 text-2xl font-bold text-white"
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </main>
    </div>
  );
}
