'use client';

import CalculatorSelector from "@/app/components/home/calculator/CalculatorSelector";

export default function Page() {
  return (
    <>
      <div className="position-relative pb-4 mt-5">
        <h1>Financial Calculators</h1>
      </div>
      <CalculatorSelector />
    </>
  );
}