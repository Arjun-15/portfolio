import { useDispatch, useSelector } from "react-redux";
import {
  coinsActions,
  coinsSelector,
  fetchCoinDetails,
} from "../../../redux/reducers/cryptoReducer";
import { useEffect, useState } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import MyLineChart from "../LineChart/LineChart";
import { DisplayKeyValue } from "../DisplayKeyValue";

export const CoinDetail = () => {
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const { coinId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [day, setDay] = useState(1);
  const { coin, favouriteCoin } = useSelector(coinsSelector);

  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinDetails({ coinId }));
    }
  }, [coinId]);

  if (
    !coin ||
    (typeof coin === "object" && Object.keys(coin).length === 0) ||
    coin.error
  ) {
    return <h1>Something went wrong.</h1>;
  }
  const descLastIdx = coin.description.en.indexOf(".");
  return (
    <div className="container">
      <div className="row text-center">
        <div className="sidebar col-md-4 ">
          <img
            src={coin.image.large}
            alt={coin.name}
          />
          <h3>{coin.name}</h3>
          <p className="text-left"
            dangerouslySetInnerHTML={{
              __html: coin.description.en.substring(0, descLastIdx + 1),
            }}
          ></p>

          <div className="container">
            <DisplayKeyValue keys={`Rank:`} value={coin.market_cap_rank} />
            <DisplayKeyValue
              keys={`Price:`}
              value={coin.market_data.current_price.usd}
            />
            <DisplayKeyValue
              keys={`Market Cap:`}
              value={coin.market_data.market_cap.usd}
            />
          </div>
          <br />
          <div className="button-wrapper  text-center">
            {favouriteCoin.includes(coinId) ? (
              <button
                className="btn btn-danger"
                onClick={() => dispatch(coinsActions.toggleFavourite(coin.id))}
              >
                remove to favorites
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => dispatch(coinsActions.toggleFavourite(coin.id))}
              >
                add to favorites
              </button>
            )}
          </div>
        </div>
        <div className="chart-section col">
          <div className="button-container">
            <button
              className={`btn btn-${day === 1 ? "success" : "primary"}`}
              onClick={() => setDay(1)}
            >
              24h
            </button>
            <button
              className={`btn btn-${day === 30 ? "success" : "primary"}`}
              onClick={() => setDay(30)}
            >
              30d
            </button>
            <button
              className={`btn btn-${day === 90 ? "success" : "primary"}`}
              onClick={() => setDay(90)}
            >
              3m
            </button>
          </div>
          <MyLineChart day={day} />
        </div>
      </div>
    </div>
  );
};
