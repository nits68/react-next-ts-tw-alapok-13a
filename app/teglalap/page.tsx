type SearchParams = {
  a?: string;
  b?: string;
};

export default async function TeglalapPage({ searchParams }: { searchParams: SearchParams }) {
  // Alapértelmezett értékek
  const params = await searchParams;
  let a: number = params?.a ? parseFloat(params.a.replace(',', '.')) : 3;
  let b: number = params?.b ? parseFloat(params.b.replace(',', '.')) : 2;
  a = isNaN(a) ? 3 : a;
  b = isNaN(b) ? 2 : b;

  // Számítás
  const kerulet: number = 2 * (a + b);
  const terulet: number = a * b;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-100 rounded-lg bg-white p-5 font-mono text-lg shadow-lg">
        <form className="grid gap-4">
          <p>Téglalap kerülete és területe</p>

          <p>
            a oldal:
            <input
              type="number"
              defaultValue={a}
              min={0}
              name="a"
              step="any"
              required
              className="input ml-2 h-8 w-36 input-primary"
            />
          </p>

          <p>
            b oldal:
            <input
              type="number"
              defaultValue={b}
              min={0}
              name="b"
              step="any"
              required
              className="input ml-2 h-8 w-36 input-primary"
            />
          </p>

          {/* JSX-ben nem lehet közvetlenül utasításokat (if, for, while) használni a kapcsos zárójelek {} belsejében,*/}
          {/* csak kifejezések lehetnek */}

          {/* Példa1 egyágú elágazásra, az && precedenciája végett a () elhagyható */}
          {a > 0 && b > 0 && (
            <div>
              <p>Kerület: {kerulet}</p>
              <p>Terület: {terulet}</p>
            </div>
          )}

          {/* Másik példa egyágú elágazásra, itt már zárójelezni kell */}
          {(a == 0 || b == 0) && (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          )}

          {/* Kétágú elágazás feltételes operátorral: */}
          {a > 0 && b > 0 ? (
            <div>
              <p>Kerület: {kerulet}</p>
              <p>Terület: {terulet}</p>
            </div>
          ) : (
            <div>
              <p className="text-red-500">Az oldal(ak) hossza nem lehet nulla!</p>
            </div>
          )}

          {/* Csak akkor kell,  ha egynél több number típusú input van a formon: */}
          <button type="submit" className="hidden"></button>
        </form>
      </div>
    </div>
  );
}
