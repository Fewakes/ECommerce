import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Total Products",
      value: 100,
    },
    {
      name: "Total Sales",
      value: 5000,
    },
    {
      name: "Total Users",
      value: 200,
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Replace with your preferred colors

  return (
    <section>
      <div className="flex justify-center gap-3">
        <img src="/Pipe.png" className="h-[28px] w-[28px]" />
        <p className="text-xl font-bold uppercase ">Dashboard</p>
      </div>

      <div className="ml-20 mt-10">
        <div>
          <h2 className="mb-10 text-2xl">Dashboard Overview</h2>
        </div>
        <div className="flex max-w-full flex-wrap justify-around">
          {data.map((item, index) => (
            <div
              key={item.name}
              className="mb-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <h3 className="mb-2">{item.name}</h3>
              <PieChart width={200} height={200}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={[item]}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill={COLORS[index % COLORS.length]}
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
