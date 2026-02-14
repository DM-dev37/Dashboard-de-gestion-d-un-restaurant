import React from "react";
import { BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

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

  const formatEuro = (value: number) => value + "$";
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
          stroke="#88888"
          fontSize={12}
          tickLine={false}
          tickFormatter={formatEuro}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
