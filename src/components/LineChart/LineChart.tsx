import React from "react";
import { LineChart } from "@mui/x-charts";

interface IMyLineChart {
  prices: [number, number][];
}

const MyLineChart: React.FC<IMyLineChart> = ({ prices }) => {
  const yAxisData = prices.map((entry) => entry[1]);
  const xAxisData = prices.map((entry) => {
    const date = new Date(entry[0]);
    return date;
  });

  return (
    <div>
      <LineChart
        xAxis={[
          {
            data: xAxisData,
            label: 'Date',
            valueFormatter:(val)=>`${new Date(val).toLocaleDateString()}`
          },
        ]}
        yAxis={[{ valueFormatter:(val)=>`$${val}` }]}
        series={[
          {
            data: yAxisData,
            label: 'Price'
          },
        ]}
        width={800}
        height={500}
      />
    </div>
  );
};

export default MyLineChart;
