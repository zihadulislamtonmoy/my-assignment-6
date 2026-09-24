import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#25272b] bg-[#0b0c0f] relative">
      <div className="mx-auto flex h-[60px] max-w-[1300px] items-center justify-between px-4">

        
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

       
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
          <Link href=""
            className="rounded-full bg-[#1b2500] px-4 py-2 text-[10px] font-medium text-[#baff00]"
          >
            Workouts
          </Link>

          <Link href=""
            className="rounded-full px-4 py-2 text-[10px] text-[#777a80] transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        
        <div className="flex items-center gap-2 text-[10px]">

          <div className="flex items-center gap-1.5">
            <span className="text-[#85878c]">
              Plan
            </span>

            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#baff00] px-1 text-[8px] font-bold text-black">
              0
            </span>
          </div>

          <div className="ml-2 flex items-center gap-1.5">
            <span className="text-[#85878c]">
              Saved
            </span>

            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full border border-[#36383d] px-1 text-[8px] text-[#85878c]">
              0
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;