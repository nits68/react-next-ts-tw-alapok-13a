'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [message, setMessage] = useState('');

  // Ez a useEffect akkor fut le, ha a name VAGY az age változik
  useEffect(() => {
    if (name && age) {
      setMessage(`Szia ${name}, ${age} éves vagy! 🎉`);
    } else if (name) {
      setMessage(`Szia ${name}! Írd be az életkorod is.`);
    } else if (age) {
      setMessage(`Beírtad, hogy ${age} éves vagy. Add meg a neved is!`);
    } else {
      setMessage('Add meg a nevedet és az életkorodat 👇');
    }
  }, [name, age]); // mindkettőt figyeli

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 space-y-4 rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold">useEffect több state figyelése</h1>
         <p className="text-lg text-gray-700">{message}</p>

        <input
          type="text"
          placeholder="Írd be a neved..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Életkorod..."
          value={age}
          onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </main>
  );
}
