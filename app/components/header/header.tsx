import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between bg-[white] p-6">
      <Link target="_blank" href="https://www.nasa.gov/missions/">
        <h2 className="cursor-pointer text-sm font-bold underline sm:text-2xl">
          Explore
        </h2>
      </Link>

      <Link href="/">
        <Image
          className="h-[auto] w-[100px] cursor-pointer sm:w-[140px]"
          src="/Logos/NasaLogo2.png"
          alt="logoNasaLogo"
          width={180}
          height={80}
        />
      </Link>
      <Link target="_blank" href="https://plus.nasa.gov/">
        <h2 className="cursor-pointer text-sm font-bold sm:text-2xl">NASA+</h2>
      </Link>
    </header>
  );
}
