import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Week 1", gmDollars: 1000, gmPercent: 30 },
  { week: "Week 2", gmDollars: 1200, gmPercent: 40 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="gmDollars" fill="#8884d8" />
        <Bar dataKey="gmPercent" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
