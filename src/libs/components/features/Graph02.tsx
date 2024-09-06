
import dynamic from 'next/dynamic';
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import dayjs from 'dayjs'; // Ensure you have dayjs installed for date manipulation
import { Box } from 'panda';
import { Typography } from '@mui/material';
interface Graph02Props{

}

export default function Graph02  (){
    const currentMonth = dayjs().format('MMM');
    const lastSevenMonths = Array.from({ length: 7 }, (_, i) =>
        dayjs().subtract(7 - i, 'month').format('MMM')
      );
    const months = [...lastSevenMonths, currentMonth];

    const data = [
        { name: months[0], views: 30000, followers: 15000 },
        { name: months[1], views: 20000, followers: 10000 },
        { name: months[2], views: 28000, followers: 12000 },
        { name: months[3], views: 35000, followers: 17000 },
        { name: months[4], views: 40000, followers: 18000 },
        { name: months[5], views: 22000, followers: 13000 },
        { name: months[6], views: 25000, followers: 14000 },
        { name: months[7], views: 27000, followers: 16000 }
    ];
  // Calculate the maximum value across views and followers
  const maxValue = Math.max(...data.map(d => Math.max(d.views, d.followers)));

  // Log max value to verify it
  console.log('maxValue:', maxValue);

  // Updated function to always round up to the nearest step
  const getRoundedMax = (value: number): number => {
    const magnitude = Math.pow(10, Math.floor(Math.log10(value))); // Get the magnitude (e.g., 1000, 10000, etc.)
    const roundUpValue = Math.ceil(value / magnitude) * magnitude;
    
    // Ensure it's always rounded a bit higher if needed (if it's an exact number)
    return roundUpValue === value ? roundUpValue + magnitude / 2 : roundUpValue;
  };

  const roundedMaxValue = getRoundedMax(maxValue); // Get the next rounded value

  // Log rounded max value to verify it
  console.log('roundedMaxValue:', roundedMaxValue);

  // Generate ticks for Y-axis based on the rounded max value
  const generateTicks = (max: number) => {
    const step = max / 5; // Divide into 5 steps (or adjust based on your preference)
    return Array.from({ length: 6 }, (_, i) => i * step); // Create ticks at 0, 20%, 40%, ..., 100%
  };

  const ticks = generateTicks(roundedMaxValue); // Generate ticks based on the calculated max

  // Log ticks to verify them
  console.log('ticks:', ticks);

    return(
    
    <Box
    bgColor={'rgba(200, 200, 200, 0.03)'}
    borderRadius={25}
    padding={30}>
      <Box
          display= 'flex'
          justifyContent= 'space-between'
          alignItems='center'
          paddingY= {2}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Insights
        </Typography>
        <Legend
          verticalAlign="top"
          wrapperStyle={{ top: 0, color: 'white' }}
          iconType="circle"
          iconSize={10}
          layout="horizontal"
        />
      </Box>

        <BarChart
      width={600}
      height={350}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      barSize={10}
      barCategoryGap="30%" 
    >
      <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" stroke="grey" />
      <XAxis dataKey="name" stroke="grey" />
      <YAxis stroke="grey" domain={[0, roundedMaxValue]} ticks={ticks} />
      <Tooltip contentStyle={{ backgroundColor: '#2E2D3B', color: 'white' }} />
      <Legend
          align="right"
          wrapperStyle={{
            top: -10, // Adjust this value to lift the legend higher
            marginTop: -20, // Additional margin adjustment
            color: 'white'
          }}
          iconType="circle"
          iconSize={10}
          layout="horizontal"
        />
      <Bar dataKey="views" fill="#FF7F50" radius={[10, 10, 0, 0]} />
      <Bar dataKey="followers" fill="#FF1493" radius={[10, 10, 0, 0]} />
    </BarChart>
    </Box>
    );
}