'use client';

import { useState } from 'react';

export default function CounterPage() {
  // Reaktivitás megvalósítáasához a useState hook-ot használjuk
  // A useState egy tömböt ad vissza, aminek az első eleme az aktuális állapot (state) értéke
  // A második elem egy függvény, amivel az állapot értékét tudjuk frissíteni

  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Számláló: </h1>
      <p className="text-5xl font-bold">{count}</p>
      <button
        className="rounded-2xl border p-3 font-medium shadow-lg"
        onClick={() => setCount(count + 1)}
      >
        Növel
      </button>
    </div>
  );
}
