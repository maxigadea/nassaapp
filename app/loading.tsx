'use client';

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center flex-col items-center gap-6">
      <img src='/Gifts/Loader.webp' alt="Loader" className="pointer-events-none w-20 h-20"/>
      <h1 className="pointer-events-none text-2xl font-semibold text-gray-600">Loading</h1>
    </div>
  );
}
