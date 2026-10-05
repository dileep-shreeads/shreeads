"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}
