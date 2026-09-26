"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isWorkoutsActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <nav className="w-full border-b border-[#25272b] bg-[#0b0c0f]">
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="FitnessLogo"
            width={85}
            height={30}
            className="mx-auto h-auto max-h-[30px] w-auto object-contain"
          />

          <h2 className="m-1.5 font-bold text-white">
            FITLOG
          </h2>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[10px] transition ${
              isWorkoutsActive
                ? "bg-[#baff00] font-bold text-black"
                : "text-[#777a80] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[10px] transition ${
              isPlanActive
                ? "bg-[#baff00] font-bold text-black"
                : "text-[#777a80] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-3 text-[9px]">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-[#85878c]">Plan</span>

            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#baff00] px-1 font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-[#85878c]">Saved</span>

            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full border border-[#36383d] px-1 text-[#85878c]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 