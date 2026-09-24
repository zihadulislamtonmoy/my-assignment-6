import React from 'react';
import bannerimg from '@/assets/banner.png'
import Image from 'next/image';

const Banner = () => {
    return (
    <section className="bg-[#0b0c0f] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl">

        <div className="flex min-h-[270px] items-center justify-between overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] px-6 py-8 sm:px-8 md:px-10">

       
          <div className="max-w-xl">

            <p className="mb-3 text-[9px] font-bold tracking-wider text-[#baff00] sm:text-[10px]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-[500px] text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-md text-[11px] leading-5 text-gray-400 sm:mt-5 sm:text-xs">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into todays plan, and watch the weeks work add up.
            </p>

            <button className="mt-5 rounded-md bg-[#baff00] px-4 py-2.5 text-[9px] font-bold uppercase text-black transition hover:bg-[#d0ff4d] sm:text-[10px]">
              Browse Workouts
            </button>

          </div>

         
          <div className="mt-6 flex justify-center sm:mt-0">
            <Image
              src={bannerimg}
              alt="Workout"
              width={280}
              height={280}
              className="h-[220px] w-[220px] object-contain lg:h-[250px] lg:w-[250px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


export default Banner;