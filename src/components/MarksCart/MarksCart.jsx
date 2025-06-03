import React, { use } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MarksCart = ( { marksPromise } ) => {
    const marksDataResponse = use( marksPromise );
    const marksData = marksDataResponse.data;
    const marksChartData = marksData.map( studentData => {
        const student = {
          id: studentData.student_id,
          name: studentData.name,
          height: studentData.height,
          english: studentData.marks.english,
          bangla: studentData.marks.bangla,
          accounting: studentData.marks.accounting,
          finance: studentData.marks.finance,
        };
        const avg = ( student.bangla + student.english + student.accounting + student.finance ) / 4;
        student.avg = avg;
        return student;
    } );
   
    
    return (
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="#17eec7"></Bar>
        <Bar dataKey="english" fill="red"></Bar>
        <Tooltip
          wrapperStyle={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            fontSize: 14,
            color: "#333",
          }}
          labelStyle={{
            fontWeight: "bold",
            marginBottom: 8,
            color: "#222",
          }}
          itemStyle={{
            color: "#555",
          }}></Tooltip>
      </BarChart>
    );
};

export default MarksCart;