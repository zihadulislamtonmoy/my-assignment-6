import Link from "next/link";
import { notFound } from "next/navigation";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0f] px-4 text-white">
      <div className="text-center">
        <p className="text-7xl font-black text-[#baff00]">404</p>

        <h1 className="mt-4 text-2xl font-black uppercase">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-[#858990]">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#baff00] px-6 py-3 text-xs font-bold text-black"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;