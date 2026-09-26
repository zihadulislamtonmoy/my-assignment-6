import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFitLog } from "@/context/FitLogContext";

const PlanCard = ({ workout, activeTab }) => {
  const {
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const handleRemove = () => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-[#292c32] bg-[#15171c] p-3 sm:flex-row sm:items-center sm:justify-between ${
        workout.done ? "opacity-60" : ""
      }`}
    >

      
      <div className="flex items-center gap-4">

        <Image
          src={workout.image}
          alt={workout.name}
          width={100}
          height={65}
          className="h-[65px] w-[100px] rounded-lg object-cover"
        />

        <div>
          <h3 className="text-sm font-black uppercase">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs text-[#858990]">
            {workout.equipment}
          </p>

          <div className="mt-2 flex gap-3 text-[10px] text-[#92969e]">
            <span>◷ {workout.duration} min</span>
            <span>● {workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>

      </div>

      
      <div className="flex items-center gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-[#36383d] px-4 py-2 text-[10px]"
        >
          View Details
        </Link>

        {activeTab === "plan" && !workout.done && (
          <button
            onClick={() => markAsDone(workout.id)}
            className="rounded-full bg-[#baff00] px-4 py-2 text-[10px] font-bold text-black"
          >
            ✓ Mark as Done
          </button>
        )}

        {workout.done && (
          <span className="text-[10px] text-[#baff00]">
            Done ✓
          </span>
        )}

        <button
          onClick={handleRemove}
          className="px-2 text-[#858990] hover:text-white"
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default PlanCard;