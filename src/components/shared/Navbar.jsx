"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useFitLog();

  return (
    <nav className="w-full border-b border-[#25272b] bg-[#0b0c0f]">

        
      <div className="mx-auto flex h-[52px] max-w-[1300px] items-center justify-between px-4">
        
    <div className="flex items-center">
                              <Image
                                src={logo}
                                alt="FitnessLogo"
                                width={85}
                                height={30}
                                className=" h-auto w-auto max-h-[30pxS] object-contain mx-auto"
                              />
                    
                              <h2 className='font-bold m-1.5'>FITLOG</h2>
                            </div>
       
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-[10px] text-[#777a80]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-[10px] text-[#777a80]"
          >
            My Plan
          </Link>
        </div>

      
        <div className="flex items-center gap-3 text-[9px]">
          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span className="text-[#85878c]">Plan</span>

            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#baff00] px-1 font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5">
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