import { Suspense } from 'react';
import CalendarTable from './table';
import { format } from 'date-fns';
import Loading from '@/app/loading';

export default function Calendar() {
  const currentDate = new Date();
  return (
    <div className="container my-4 flex h-full w-full flex-col items-center gap-10 p-2">
      <h1 className="text-lg font-bold sm:text-xl lg:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <div className="flex h-full w-full flex-col gap-4 rounded-md border bg-[white] p-6">
        <div className="flex flex-row items-center justify-between px-8">
          <h2 className="text-left text-sm font-bold underline sm:text-lg lg:text-xl">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <div className="flex h-full flex-row items-center justify-between gap-2">
            <img
              className="h-4 w-4 cursor-pointer"
              src="/Icons/chevron-left-solid.svg"
              alt="chevronLeft"
            />
            <img
              className="h-4 w-4 cursor-pointer"
              src="/Icons/chevron-right-solid.svg"
              alt="chevronRight"
            />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <CalendarTable />
        </Suspense>
      </div>
    </div>
  );
}
