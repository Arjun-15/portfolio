import { useDispatch, useSelector } from "react-redux";
import {
  coinsSelector,
  fetchCoinDetailsAndChart,
} from "../../redux/reducers/cryptoReducer";
import { useEffect, useState } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import MyLineChart from "../LineChart/LineChart";

export const CoinDetail = () => {
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const { coinId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [day, setDay] = useState(1);
  const { coin, chartData } = useSelector(coinsSelector);

  useEffect(() => {
    if (coinId && day) {
      dispatch(fetchCoinDetailsAndChart({ coinId, day }));
    }
  }, [coinId,day]);

  if (
    !coin ||
    (typeof coin === "object" && Object.keys(coin).length === 0) ||
    coin.error
  ) {
    return <h1>Something went wrong.</h1>;
  }
  console.log(chartData);
  const descLastIdx = coin.description.en.indexOf(".");
  return (
    <div className="container">
      <div className="row">
        <div className="sidebar col-md-4">
          <img src={coin.image.large} alt={coin.name} />
          <h3>{coin.name}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: coin.description.en.substring(0, descLastIdx + 1),
            }}
          ></p>

          <div className="market-data">
            <div className="market-data-item">
              <span className="heading">Rank:</span>
              <span>{coin.market_cap_rank}</span>
            </div>
            <div className="market-data-item">
              <span className="heading">Current Price:</span>
              <span>{coin.market_data.current_price.usd}</span>
            </div>
            <div className="market-data-item">
              <span className="heading">Market Cap:</span>
              <span>{coin.market_data.market_cap.usd}</span>
            </div>
          </div>

          <div className="button-wrapper">
            <button>add to favorites</button>
          </div>
        </div>
        <div className="chart-section col">
          <div className="button-container">
            <button className={`btn btn-${day===1?'success' : 'primary'}`} onClick={() => setDay(1)}>24h</button>
            <button className={`btn btn-${day===30?'success' : 'primary'}`} onClick={() => setDay(30)}>30d</button>
            <button className={`btn btn-${day===90?'success' : 'primary'}`} onClick={() => setDay(90)}>3m</button>
          </div>
          <MyLineChart prices={chartData.prices} />
        </div>
      </div>
    </div>
  );
};
