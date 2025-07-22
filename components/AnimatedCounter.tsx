"use client";
import React from "react";
import CountUp from "react-countup";

export const AnimatedCounter = ({ amount = 2 }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        decimal=","
        prefix="$"
        decimals={2}
        duration={2}
      />
    </div>
  );
};
