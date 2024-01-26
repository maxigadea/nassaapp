import { fetchImagesByDate } from '@/app/lib/data';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default async function ImageDetail({
  params,
}: {
  params: { date: string };
}) {
  const { date } = params;

  const imageDetails = await fetchImagesByDate(date);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-10 p-10 sm:flex-row xl:items-center">
      <div className="flex h-full w-full flex-col items-start gap-6 sm:w-[40%] sm:gap-10">
        <Link
          href="/"
          className="flex flex-row items-center gap-2 opacity-50 hover:opacity-100"
        >
          <img
            className="h-4 w-4 cursor-pointer "
            src="/Icons/chevron-left-solid.svg"
            alt="chevronLeft"
          />
          <p className="cursor-pointer text-sm font-medium sm:text-lg">Back</p>
        </Link>

        <h1
          style={{ lineHeight: '50px' }}
          className="text-xl font-bold sm:max-w-[60%] sm:text-2xl lg:text-4xl"
        >
          {imageDetails.title}
        </h1>
        <p
          style={{ lineHeight: '32px' }}
          className="text-sm font-medium sm:max-w-[80%] lg:text-xl"
        >
          {imageDetails.explanation}
        </p>
        <p
          style={{ lineHeight: '32px' }}
          className="rounded-xl bg-[white] px-4 py-1 text-sm font-medium sm:max-w-[80%] lg:text-lg"
        >
          {format(date, 'eeee dd, MMMM')}
        </p>
      </div>
      <div className=" flex h-[50%] w-full items-center justify-center rounded-md border bg-[white] px-4 py-10 sm:h-full sm:w-[60%]">
        <Image
          width={800}
          height={500}
          className="h-[600px] w-[800px] max-w-full overflow-clip rounded-md border"
          src={imageDetails.hdurl}
          alt="image"
          priority={true}
          placeholder="blur"
          blurDataURL="/Gifts/Loader.webp"
        />
      </div>
    </div>
  );
}
