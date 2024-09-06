import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import dayjs from 'dayjs'; // Ensure you have dayjs installed for date manipulation
import { Box } from 'panda';

interface GraphProps{

}

export default function Graph  (){
    const currentMonth = dayjs().format('MMM');
    const lastSevenMonths = Array.from({ length: 7 }, (_, i) =>
        dayjs().subtract(7 - i, 'month').format('MMM')
      );
    const months = [...lastSevenMonths, currentMonth];


    return(
    
    <Box
    bgColor={'rgba(200, 200, 200, 0.03)'}
    borderRadius={25}
    padding={30}>
        <Box
        color= 'white'
        paddingY={10}>
            Insights
        </Box>

        <BarChart
            series={[
                { data: [35, 44, 24, 34, 30, 27, 40, 50] },
                { data: [51, 6, 49, 30, 20, 33, 45, 55] }
            ]}
            height={290}
            width={500}
            xAxis={[
                {
                    data: months, 
                    scaleType: 'band',
                    labelStyle: { fill: 'grey' }
                }
            ]}
            yAxis={[
                {
                  labelStyle: { fill: 'grey' }
                }
              ]}
            grid={{ horizontal: true
            }}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
    </Box>
    );
}