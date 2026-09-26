import Image from "next/image";
import React from "react";

const LibraryCard = ({ workout }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c]">

      <div className="h-[220px] w-full overflow-hidden sm:h-[210px]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      
      <div className="p-6">

        
        <div className="mb-5 flex flex-wrap gap-2">
          {workout.muscleGroups
            .slice(0, 2)
            .map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
        </div>

       
        <h3 className="text-2xl font-black uppercase leading-none text-white">
          {workout.name}
        </h3>

       
        <p className="mt-3 text-sm text-[#858990]">
          {workout.equipment}
        </p>

       
        <div className="my-5 h-px bg-[#292c32]" />

        
        <div className="flex items-center gap-4 text-sm text-[#92969e]">

         
          <div className="flex items-center gap-1.5">
            <span className="text-base">◷</span>
            <span>{workout.duration} min</span>
          </div>

         
          <div className="flex items-center gap-1.5">
            <span className="text-base">●</span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          
          <div className="flex items-center gap-1.5">
            <span className="text-base">☆</span>
            <span>{workout.rating}</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LibraryCard;