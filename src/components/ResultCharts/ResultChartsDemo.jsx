import React from 'react';
import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
// https://recharts.org/en-US/guide for making charts
const ResultChartsDemo = () => {
  const studentsData = [
    {
      name: "Ram",
      height: 200,
      math: 100,
      english: 100,
      bangla: 100,
      accounting: 100,
      finance: 100,
    },
    {
      name: "Ramesh",
      height: 170,
      math: 85,
      english: 78,
      bangla: 90,
      accounting: 88,
      finance: 75,
    },
    {
      name: "Subrata",
      height: 168,
      math: 92,
      english: 85,
      bangla: 80,
      accounting: 90,
      finance: 82,
    },
    {
      name: "Bimal",
      height: 167,
      math: 76,
      english: 70,
      bangla: 68,
      accounting: 72,
      finance: 77,
    },
    {
      name: "Santosh",
      height: 172,
      math: 65,
      english: 72,
      bangla: 74,
      accounting: 69,
      finance: 70,
    },
    {
      name: "Pradip",
      height: 169,
      math: 88,
      english: 90,
      bangla: 85,
      accounting: 87,
      finance: 80,
    },
    {
      name: "Debashish",
      height: 171,
      math: 95,
      english: 92,
      bangla: 90,
      accounting: 93,
      finance: 88,
    },
    {
      name: "Ranjit",
      height: 166,
      math: 70,
      english: 65,
      bangla: 72,
      accounting: 74,
      finance: 69,
    },
    {
      name: "Dipak",
      height: 168,
      math: 90,
      english: 88,
      bangla: 84,
      accounting: 89,
      finance: 85,
    },
    {
      name: "Sukumar",
      height: 173,
      math: 68,
      english: 72,
      bangla: 70,
      accounting: 66,
      finance: 73,
    },
    {
      name: "Arun",
      height: 169,
      math: 80,
      english: 75,
      bangla: 78,
      accounting: 82,
      finance: 76,
    },
  ];
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const student = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}>
          <p>
            <strong>{student.name}</strong>
          </p>
          <p>Math: {student.math}</p>
          <p>Height: {student.height} cm</p>
        </div>
      );
    }
    return null;
  };
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          {/* X axis: math marks */}
          <XAxis
            type="number"
            dataKey="math"
            name="Math"
            unit="marks"
            domain={[0, 110]}
          />
          {/* Y axis: height */}
          <YAxis
            type="number"
            dataKey="height"
            name="Height"
            unit="cm"
            domain={[150, 210]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Scatter
            name="Students"
            data={studentsData}
            fill="#8884d8"
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
};

export default ResultChartsDemo;