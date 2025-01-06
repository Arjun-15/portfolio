import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts";
import { useDispatch, useSelector } from "react-redux";
import { coinsSelector, fetchCoinChartData } from "../../../redux/reducers/cryptoReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

interface IMyLineChart {
  // prices: [number, number][];
  day: number;
}

const MyLineChart: React.FC<IMyLineChart> = ({ day }) => {
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const {coinId} = useParams();
  const { chartData } = useSelector(coinsSelector);
  const dispatch :AppDispatch= useDispatch();

  useEffect(() => {
    if (coinId && day) {
      dispatch(fetchCoinChartData({ coinId, day }));
    }
  }, [coinId,day]);

  if (!chartData) return <h1>chartData is not define</h1>;
  const prices = chartData.prices;
  if (!prices) return <h1>prices is not define</h1>;
  const yAxisData = prices.map((entry:any) => entry[1]);
  const xAxisData = prices.map((entry:any) => {
    const date = new Date(entry[0]);
    return date;
  });

  return (
    <div>
      <LineChart
        xAxis={[
          {
            data: xAxisData,
            label: "Date",
            valueFormatter: (val) => `${new Date(val).toLocaleDateString()}`,
          },
        ]}
        yAxis={[{ valueFormatter: (val) => `$${val}` }]}
        series={[
          {
            data: yAxisData,
            label: "Price",
          },
        ]}
        width={800}
        height={500}
      />
    </div>
  );
};

export default MyLineChart;
