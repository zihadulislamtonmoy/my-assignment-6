import React from "react";
import WorkoutDetails from "@/components/details/WorkoutDetailsPage";
import { notFound } from "next/navigation";

const getWorkout = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;

  const workoutData = await getWorkout(id);



  const workout = workoutData.find(workout => String(workout.id)===String(id))

    if (!workout) {
  notFound();
}
 
  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage; 