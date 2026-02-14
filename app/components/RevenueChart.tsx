import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function RevenueChart() {
  const data = [
    { name: "Lun", total: 1420 }, // Lundi : 1420€
    { name: "Mar", total: 1890 }, // Mardi : 1890€
    { name: "Mer", total: 2390 }, // Mercredi : 2390€
    { name: "Jeu", total: 3490 }, // Jeudi : 3490€
    { name: "Ven", total: 4200 }, // Vendredi : 4200€
    { name: "Sam", total: 5000 }, // Samedi : 5000€
    { name: "Dim", total: 2850 }, // Dimanche : 2850€
  ];

  const formatEuro = (value: number) => value + "€";
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey={"name"}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          tickFormatter={formatEuro}
        />
        <Tooltip
          formatter={formatEuro}
          cursor={{ fill: "rgba(245,148,11,0.1)" }}
          contentStyle={{
            borderRadius: "8px",
            border: "1px solid #f59e0b",
            boxShadow: "0 4px 12px rgba(245,158,11,0.15)",
            background: "rgba(255,255,255,0.95)",
          }}
        />

        <Bar
          dataKey={"total"}
          radius={[6, 6, 6, 0]}
          fill="url(#colorGradient)"
          className="fill-amber-400"
        />
        <defs>
          <linearGradient id="colorGradient" x1={0} y1={0} x2={0} y2={1}>
            <stop offset={"0%"} stopColor="#f97316" stopOpacity={1} />
            <stop offset={"100%"} stopColor="#f59e0b" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
