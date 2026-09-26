import React from "react";
import LibraryCard from "../shared/LibraryCard";
import Link from "next/link";

const getWorkout = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Library = async () => {
  const workoutData = await getWorkout();

  return (
    <section className="bg-[#0b0c0f] px-4 py-8 sm:px-6 lg:px-8">
      <div className="container mx-auto">

       
        <div className="mb-7">
         
          <h2 className="text-3xl font-black uppercase text-white sm:text-3xl">
            THE LIBRARY
          </h2>
          <p className="text-gray-400"> Twelve lifts covering every major muscle group. </p>
        </div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workoutData.map((workout) => (
            <Link href={`/workout/${workout.id}`}
            key={workout.id}>

            <LibraryCard
              key={workout.id}
              workout={workout}
            />

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Library;

