"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";
import PlanCard from "./PlanCard";

const MyPlan = () => {
  const {
    plan,
    saved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-4 py-8 text-white">
      <div className="container mx-auto">

        
        <div>
          <h1 className="text-3xl font-black uppercase">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-[#858990]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="rounded-xl bg-[#15171c] p-5">
            <p className="text-xs text-[#858990]">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#baff00]">
              {plan.length}
            </p>
          </div>

          <div className="rounded-xl bg-[#15171c] p-5">
            <p className="text-xs text-[#858990]">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl bg-[#15171c] p-5">
            <p className="text-xs text-[#858990]">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black">
              {totalCalories}
            </p>
          </div>

        </div>

        
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">

          <div className="flex rounded-lg bg-[#15171c] p-1">

            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-xs ${
                activeTab === "plan"
                  ? "bg-[#baff00] text-black"
                  : "text-[#858990]"
              }`}
            >
              Todays Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs ${
                activeTab === "saved"
                  ? "bg-[#baff00] text-black"
                  : "text-[#858990]"
              }`}
            >
              Saved
            </button>

          </div>

          
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#858990]">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-[#36383d] bg-[#15171c] px-3 py-2 text-xs text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        <div className="mt-5 space-y-3">

          {sortedList.length > 0 ? (
            sortedList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
              />
            ))
          ) : (
            <div className="border border-dashed border-[#292c32] py-20 text-center">

              <h2 className="text-xl font-black uppercase">
                Nothing Here Yet
              </h2>

              <p className="mt-2 text-sm text-[#858990]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 inline-block rounded-full bg-[#baff00] px-5 py-3 text-xs font-bold text-black"
              >
                Go to workouts
              </Link>

            </div>
          )}

        </div>

      </div>
    </main>
  );
};

export default MyPlan;