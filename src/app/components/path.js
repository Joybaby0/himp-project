'use client';

import { useState } from 'react';

const steps = [
  { label: 'Evaluate Finances', subtext: 'Assess your income level', showLabel: true },
  { label: 'Stay Focused', subtext: 'Work harder to build up funds', showLabel: true },
  { label: 'Approach Bank', subtext: 'Engage a primary mortgage lender', showLabel: true },
  { label: 'Search Properties', subtext: 'Search for your home within budget', showLabel: true },
  {
    label: 'NMRC',
    subtext: 'Refinancing your mortgage loan\nUp to 20 years',
    showLabel: true,
  },
];

export default function PathToHomeownership() {
  const [current, setCurrent] = useState(null);

  return (
    <section className="bg-[#FFFAEC] py-28 px-4">
      <div className="text-center mb-10">
      <h3 className="-mt-4 text-xl md:text-2xl text-gray-700 mb-2 bg-[url('/pathimg.png')] bg-cover bg-center inline-block px-4 py-2 rounded-md">
          HOMEOWNERSHIP
        </h3>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base mb-20">
          To enable Nigerians to take advantage of these improvements to own their dream homes,
          we have put together the following tips on the path to homeownership as a guide.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Green line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-green-700 z-0 mx-6 md:mx-10" />

        {/* Circular Nodes */}
        <div className="flex justify-between items-center relative z-10 px-6 md:px-10">
          {Array(7)
            .fill(0)
            .map((_, i) => {
              const isFirst = i === 0;
              const isLast = i === 6;
              const size = isFirst || isLast ? 'w-8 h-8' : 'w-5 h-5';
              const selected = current === i;
              const isClickable = i > 0 && i < 6;

              return (
                <button
                  key={i}
                  onClick={() => {
                    if (isClickable) setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-200 ${size} ${
                    selected
                      ? 'bg-white border-4 border-green-600 shadow-[0_0_0_3px_rgba(34,197,94,0.3)]'
                      : 'bg-green-700 border-4 border-transparent'
                  }`}
                />
              );
            })}
        </div>

        {/* Text Boxes (Only 5 shown) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mt-12 px-4 sm:px-10">
          {steps.map((step, index) => {
            const nodeIndex = index + 1; // Shift because first is at 0
            const isActive = current === nodeIndex;

            return (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all ${
                  isActive ? 'bg-gradient-to-r from-[#5CA47A] to-[#054720] text-white  shadow-sm' : ''
                }`}
              >
                <h4 className={`text-base mb-2 ${isActive ? 'text-white' : 'text-[#7D7D7D]'}`}>
                  {step.label}
                </h4>
                <p
                  className={`text-sm whitespace-pre-line ${
                    isActive ? 'text-white' : 'text-[#3F3F3F]'
                  }`}
                >
                  {step.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
