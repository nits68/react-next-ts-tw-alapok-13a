'use client';

import { useState } from 'react';
import AligmentBar from './AlignmentBar';

export type AlignOptions = {
  label: string;
  value: string;
};

export default function FlexboxPage() {
  // Függőleges igazítás

  const verticalAlign: AlignOptions[] = [
    { label: 'Top', value: 'items-start' },
    { label: 'Center', value: 'items-center' },
    { label: 'Bottom', value: 'items-end' },
  ];

  // Vízszintes igazítás
  const horizontalAlign: AlignOptions[] = [
    { label: 'Left', value: 'justify-start' },
    { label: 'Center', value: 'justify-center' },
    { label: 'Right', value: 'justify-end' },
    { label: 'Space Between', value: 'justify-between' },
    { label: 'Space Around', value: 'justify-around' },
  ];

  const [vertical, setVerical] = useState<string>('items-start');
  const [horizontal, setHorizontal] = useState<string>('justify-center');

  return (
    <div className="flex min-h-screen flex-col">
      <AligmentBar
        alignmentType="Vertical"
        aligments={verticalAlign}
        setAligment={setVerical}
        actValue={vertical}
      />
      <div
        className={`flex h-72 w-full flex-wrap bg-yellow-100 ${vertical} ${horizontal} gap-4`}
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="flex h-24 w-24 items-center justify-center rounded-xl border border-black bg-gradient-to-tr from-cyan-400 to-blue-600 font-bold text-white shadow-md"
          >
            {i + 1}
          </div>
        ))}
      </div>
      <AligmentBar
        alignmentType="Horizontal"
        aligments={horizontalAlign}
        setAligment={setHorizontal}
        actValue={horizontal}
      />
    </div>
  );
}
