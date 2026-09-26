"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const FitLogContext = createContext();

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // Add to today's plan
  const addToPlan = (workout) => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.error("Already added to today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan can contain maximum 5 workouts");
      return;
    }

    setPlan([...plan, { ...workout, done: false }]);

    toast.success("Added to today's plan");
  };

  // Save for later
  const saveForLater = (workout) => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error("Already saved");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Saved for later");
  };

  // Remove from today's plan
  const removeFromPlan = (id) => {
    setPlan(plan.filter((item) => item.id !== id));

    toast.success("Removed from today's plan");
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved(saved.filter((item) => item.id !== id));

    toast.success("Removed from saved");
  };

  // Mark as done
  const markAsDone = (id) => {
    setPlan(
      plan.map((item) =>
        item.id === id
          ? { ...item, done: true }
          : item
      )
    );

    toast.success("Workout marked as done");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  return useContext(FitLogContext);
};