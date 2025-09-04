'use client';

import { useState } from 'react';
import IncrementButton from './IncrementButton';

export default function CounterPage() {
  // Reaktivitás megvalósítáasához a useState hook-ot használjuk
  // A useState egy tömböt ad vissza, aminek az első eleme az aktuális állapot (state) értéke
  // A második elem egy függvény, amivel az állapot értékét tudjuk frissíteni

  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="space-y-6 rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="text-2xl font-semibold">Számláló: </h1>
        <p className="text-5xl font-bold text-red-700">{count}</p>
        <IncrementButton onIncrement={handleIncrement} />
      </div>
    </main>
  );
}
