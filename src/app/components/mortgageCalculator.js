"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(5000000);
  const [term, setTerm] = useState(20);
  const [income, setIncome] = useState(100000);
  const [monthlyPayment, setMonthlyPayment] = useState(95000);
  const [principal, setPrincipal] = useState(75000);
  const [interest, setInterest] = useState(25000);

  const handleCalculate = () => {
    const rate = 0.07 / 12; // sample 7% annual interest rate
    const n = term * 12;
    const monthly =
      (amount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    setMonthlyPayment(Math.round(monthly));
    setPrincipal(Math.round((amount / n)));
    setInterest(Math.round(monthly - amount / n));
  };

  return (
    <section
      className="bg-cover bg-center py-10 md:py-28 px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `url('/rectangle.png')`,
      }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left - Results */}
        <div className="bg-green-800 text-white p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">Mortgage Calculator</h2>
          <p className="text-sm mb-4">Your estimated Monthly Income is</p>
          <p className="text-4xl font-bold mb-6">₦{monthlyPayment.toLocaleString()}</p>

          <hr className="my-4 border-white/30" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Total Principal Amount</span>
              <span>₦{principal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest Paid</span>
              <span>₦{interest.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right - Input Form */}
        <div className="p-4 space-y-4">
          <p className="text-sm text-gray-700">
            Calculate your monthly mortgage payment using the free calculator below.
          </p>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Mortgage Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Mortgage Term in Years</label>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(+e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Monthly Income</label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(+e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-green-800 hover:bg-green-900 text-white p-3 rounded text-sm font-semibold"
          >
            Calculate
          </button>
        </div>
      </div>
    </section>
  );
}
