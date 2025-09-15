import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  type Links = {
    id: number,
    href: string,
    label: string,
  }

  const links: Links[] = [
    { id: 1, href: '/counter', label: 'Számláló' },
    { id: 2, href: '/flexbox', label: 'Flexbox demó' },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-70 flex-col items-center rounded-2xl bg-white p-8 shadow-xl">
        <Image src="globe.svg" alt="Image" width="100" height={100} />
        <h1 className="mt-4 text-3xl font-bold">Hello 13.A</h1>
      </div>
      <div className="mt-8 flex w-70 flex-col items-center rounded-2xl bg-white p-8 shadow-xl">
        <ul>
          {links.map((link) => (
            <li className='active:scale-125 transform text-center' key={link.id}>
              <Link
                className="font-semibold text-gray-500  hover:font-bold hover:text-red-600"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
