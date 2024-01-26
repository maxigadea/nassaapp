'use client';

export default function ErrorBoundary() {
  return (
    <div className="flex h-full w-full justify-center flex-col items-center gap-6">
      <img src='/Icons/circle-exclamation-solid.svg' alt="erroIcon" className="w-10 h-10"/>
      <h1 className="text-2xl font-semibold text-gray-600">An error has ocurred, please, reload the page!</h1>
    </div>
  );
}
