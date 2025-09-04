import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Image src="globe.svg" alt="Image" width={100} height={100} />
      <h1 className="text-3xl font-bold mt-4">Hello 13.A</h1>
    </div>
  );
}
