
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { value: 68 }, // Percentage part
  { value: 32 }, // Remaining part
];

export default function ProgressBar() {
  // Dynamically calculate percentage based on the data
  const total = data.reduce((sum, entry) => sum + entry.value, 0); // Sum of all values
  const percentage = Math.round((data[0].value / total) * 100); // Calculate percentage

  return (
    <Box position="relative" display="inline-flex">
      {/* Pie Chart */}
      <PieChart width={75} height={75}>
        {/* Define the gradient using native SVG */}
        <svg>
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F1755F" />
              <stop offset="100%" stopColor="#F15F9A" />
            </linearGradient>
          </defs>
        </svg>

        <Pie
          data={data}
          cx={37.5}
          cy={37.5}
          innerRadius={25}
          outerRadius={30}
          startAngle={90}
          endAngle={450}
          paddingAngle={0}
          dataKey="value"
        >
          {/* Apply the gradient */}
          <Cell fill="url(#gradientColor)" stroke='none' />
          <Cell fill="#4E4B5F" stroke='none'/>
        </Pie>
      </PieChart>

      {/* Centered Percentage */}
      <Box
        top={11}
        left={11}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="white" fontSize={14}>
          {`${percentage}%`}
        </Typography>
      </Box>
    </Box>
  );
}
