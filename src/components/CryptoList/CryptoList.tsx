import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { coinsSelector, fetchInitial } from "../../redux/reducers/cryptoReducer";
import { Pagination } from "../Pagination/Pagination";

// Define the type for your thunk actions
type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export const CryptoList = () => {
  const { coins } = useSelector(coinsSelector);
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25; // Set your items per page
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  useEffect(() => {
    dispatch(fetchInitial());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedCoins = [...coins].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedCoins.slice(indexOfFirstItem, indexOfLastItem);

  const renderSortIcon = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? <i className="fas fa-arrow-up"></i> : <i className="fas fa-arrow-down"></i>;
  };

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Icon</th>
            <th onClick={() => handleSort("name")}>
              Name {renderSortIcon("name")}
            </th>
            <th onClick={() => handleSort("price_change_24h")}>
              Price {renderSortIcon("price_change_24h")}
            </th>
            <th onClick={() => handleSort("total_volume")}>
              Volume {renderSortIcon("total_volume")}
            </th>
            <th onClick={() => handleSort("market_cap")}>
              Market Cap {renderSortIcon("market_cap")}
            </th>
            <th onClick={() => handleSort("favorite")}>
              Favorite {renderSortIcon("favorite")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((coin: any, rowIndex: number) => (
              <tr key={rowIndex}>
                <td>{indexOfFirstItem + rowIndex + 1}</td>
                <td>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    style={{ width: "2rem" }}
                    onError={(e) => {
                      console.error(`Error loading image: ${coin.image}`, e);
                      e.currentTarget.style.display = "none"; // Hide the image if it fails to load
                    }}
                  />
                </td>
                <td>{coin.name}</td>
                <td>{coin.price_change_24h}</td>
                <td>{coin.total_volume}</td>
                <td>{coin.market_cap}</td>
                <td>
                  <i className={coin.favorite ? "fas fa-star" : "far fa-star"}></i>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination data={coins} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </>
  );
};
