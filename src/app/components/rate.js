'use client';
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "JAN", value: 5 },
  { name: "FEB", value: 7 },
  { name: "MAR", value: 8 },
  { name: "APR", value: 10 },
  { name: "MAY", value: 7 },
  { name: "JUN", value: 6 },
  { name: "JUL", value: 8 },
  { name: "AUG", value: 9 },
  { name: "SEP", value: 6 },
  { name: "OCT", value: 7 },
  { name: "NOV", value: 6 },
  { name: "DEC", value: 7 },
];

const cards = [
  { title: "NMRC Financing Rate", rate: "9%", type: "2019 - 2020", earlyYears: "5%", color: "red" },
  { title: "NMRC Mortgage Rate", rate: "19%", type: "2019 - 2020", earlyYears: "5%", color: "green" },
  { title: "NHF Rate", rate: "7% - 20%", type: "2019 - 2020", earlyYears: "5%", color: "blue" },
  { title: "NMRC Financing Rate", rate: "29%", type: "2019 - 2020", earlyYears: "5%", color: "orange" },
  { title: "NMRC Financing Rate", rate: "12%", type: "2020 - 2021", earlyYears: "4%", color: "purple" },
  { title: "NHF Rate", rate: "10% - 22%", type: "2020 - 2021", earlyYears: "5%", color: "teal" },
  { title: "NMRC Mortgage Rate", rate: "18%", type: "2021 - 2022", earlyYears: "5%", color: "cyan" },
  { title: "NMRC Financing Rate", rate: "25%", type: "2021 - 2022", earlyYears: "5%", color: "pink" },
];

export default function MortgageRates() {
  return (
    <section className="py-14 pl-4 sm:pl-12 lg:pl-28">
      <h2 className="text-2xl font-semibold mb-4">Mortgage Rates in Nigeria</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-96 border rounded-xl border-[#C9D1E5] px-3 shadow-sm bg-white flex items-center space-x-2"
          >
            <div className="flex flex-col w-1/2">
              <p className="text-sm text-gray-500 mb-1">{card.title}</p>
              <p className="text-2xl font-bold text-gray-800">{card.rate}</p>
              <p className="text-sm text-gray-500">{card.type}</p>
              <p className="text-sm text-gray-500 mt-2">Early Years</p>
              <p className="font-bold text-gray-800">{card.earlyYears}</p>
            </div>
            <div className="min-w-[200px] h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={[0, 30]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={card.color}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar cross-browser */}
      <style jsx>{`
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
}
