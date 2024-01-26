import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from 'date-fns';

import {} from '@/app/lib/definitions';
import { fetchImagesByRange } from '@/app/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default async function CalendarTable() {
  //Calendar table days logic
  const WEEKDAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const startingDayIndex = getDay(firstDayOfMonth); //Return the index of the first day of the month

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  //Nasa Api Call
  const dataNasa = await fetchImagesByRange(
    firstDayOfMonth,
    lastDayOfMonth,
    currentDate,
  );

  return (
    <div className="mt-6 grid h-[90%] w-[90%] grid-cols-7 place-items-center gap-2 place-self-center p-2">
      {WEEKDAYS.map((day) => {
        return (
          <div
            key={day}
            className="flex items-center justify-center text-center font-bold"
          >
            {day}
          </div>
        );
      })}
      {Array.from({ length: startingDayIndex }).map((_, i) => {
        return (
          <div
            key={i}
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-2xl border p-2 text-center sm:h-[60px] sm:w-[60px] lg:h-[120px] lg:w-[120px]`}
          />
        );
      })}
      {daysInMonth.map((day, index) => {
        return (
          <Link
            className={`${
              dataNasa[index]?.url && dataNasa[index]?.media_type != 'video'
                ? 'pointer-events-auto'
                : 'pointer-events-none'
            }`}
            href={`/image/${dataNasa[index]?.date}`}
            key={index}
          >
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-2xl border p-2 text-center hover:scale-110 hover:border-gray-500 sm:h-[60px] sm:w-[60px] lg:h-[120px] lg:w-[120px] ${
                isToday(day) ? 'border-2 border-gray-800' : ''
              }`}
            >
              <div className="flex h-full w-full items-center justify-center">
                {dataNasa[index]?.url &&
                dataNasa[index]?.media_type != 'video' ? (
                  <Image
                    width={100}
                    height={100}
                    className="h-full w-full rounded-xl"
                    src={dataNasa[index]?.url}
                    alt="img"
                    placeholder="blur"
                    blurDataURL="/Gifts/Loader.webp"
                  />
                ) : (
                  <img
                    width={150}
                    height={150}
                    className=" h-full w-full rounded-xl"
                    src="/Icons/landscape-placeholder.svg"
                    alt="Not Found"
                  />
                )}
                <label
                  style={{ textShadow: '3px 1px 3px black' }}
                  className="absolute cursor-pointer text-center text-base font-medium text-white text-opacity-100 opacity-100 drop-shadow-xl sm:text-2xl"
                >
                  {format(day, 'd')}
                </label>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
