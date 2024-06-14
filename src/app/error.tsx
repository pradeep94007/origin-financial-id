"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <h2 className="text-xl font-semibold text-red-500">
        {error ? `${error}` : "Something went wrong!"}
      </h2>
      <button
        className="p-2 px-3 border bg-blue text-white rounded-sm font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
