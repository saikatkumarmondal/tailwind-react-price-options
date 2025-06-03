import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ResultCharts = () => {
  const resultData = [
    { name: "Student 1", accounting: 85, management: 78, math: 92 },
    { name: "Student 2", accounting: 90, management: 82, math: 88 },
    { name: "Student 3", accounting: 76, management: 74, math: 80 },
    { name: "Student 4", accounting: 65, management: 70, math: 72 },
    { name: "Student 5", accounting: 88, management: 85, math: 90 },
    { name: "Student 6", accounting: 92, management: 89, math: 95 },
    { name: "Student 7", accounting: 70, management: 68, math: 75 },
    { name: "Student 8", accounting: 95, management: 91, math: 97 },
    { name: "Student 9", accounting: 68, management: 72, math: 78 },
    { name: "Student 10", accounting: 80, management: 76, math: 84 },
  ];

  return (
    <div
      style={{
        width: "100%", // take full width of parent container
        maxWidth: 900, // max width on large screens
        height: 500, // fixed height (you can also make this responsive)
        margin: "0 auto", // center horizontally
      }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={resultData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="math" stroke="#8884d8" />
          <Line dataKey="management" stroke="#17ee1a" />
          <Tooltip
            separator=": "
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{
              maxWidth: "80vw",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: 6,
              padding: "12px 20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: 14,
              color: "#333",
            }}
            labelStyle={{
              marginBottom: 8,
              fontWeight: 700,
              fontSize: 16,
              color: "#2c3e50",
            }}
            itemStyle={{
              marginBottom: 4,
              color: "#555",
              fontWeight: 500,
            }}
            cursor={{
              stroke: "#2980b9",
              strokeWidth: 2,
              strokeDasharray: "4 2",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultCharts;
