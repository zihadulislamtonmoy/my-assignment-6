
import Image from "next/image";
import React from "react";
import { useFitLog } from "@/context/FitLogContext";

const WorkoutDetails = ({ workout }) => {
  const { addToPlan, saveForLater } = useFitLog();

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-8 text-white">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

         
          <div className="overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              width={740}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

         
          <div>

            <h1 className="text-3xl font-black uppercase">
              {workout.name}
            </h1>

            <p className="mt-3 text-sm text-[#858990]">
              {workout.description}
            </p>

           
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

           
            <div className="mt-6 rounded-xl bg-[#15171c]">

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  EQUIPMENT
                </span>
                <span className="text-xs">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  DIFFICULTY
                </span>
                <span className="text-xs">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  SETS
                </span>
                <span className="text-xs">
                  {workout.sets}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  REPS
                </span>
                <span className="text-xs">
                  {workout.reps}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  DURATION
                </span>
                <span className="text-xs">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292c32] p-4">
                <span className="text-[10px] text-[#858990]">
                  CALORIES
                </span>
                <span className="text-xs">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between p-4">
                <span className="text-[10px] text-[#858990]">
                  RATING
                </span>
                <span className="text-xs">
                  {workout.rating}
                </span>
              </div>

            </div>

           
            <div className="mt-6">
              <h2 className="text-sm font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs text-[#858990]"
                  >
                    <span>{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">

              <button
                onClick={() => addToPlan(workout)}
                className="rounded-lg bg-[#baff00] px-5 py-3 text-xs font-bold text-black"
              >
                ✓ Add to todays plan
              </button>

              <button
                onClick={() => saveForLater(workout)}
                className="rounded-lg border border-[#36383d] px-5 py-3 text-xs text-white"
              >
                ♧ Save for later
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;