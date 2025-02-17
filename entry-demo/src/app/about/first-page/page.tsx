"use client";
import { useState } from "react";

export default function Firstpage() {
    console.log("First Page");
    const [count, useCount] = useState(0);
  return (
    <div>
      <p>Here is the first page</p>
      <button onClick={() => useCount(count + 1)}>Count{count}</button>
    </div>
  )
};
