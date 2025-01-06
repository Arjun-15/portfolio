import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useDispatch, useSelector } from "react-redux";
import { coinsSelector, searchCoins } from "../../../redux/reducers/cryptoReducer";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

export const CryptoNavbar = () => {
  type AppDispatch = ThunkDispatch<any, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  const { searchResults } = useSelector(coinsSelector);
  const [showPopover, setShowPopover] = useState(false);
  const searchInputRef = useRef(null);
  const popoverContentRef = useRef(null);
  const displayItem = 20;
  const [displayedItems, setDisplayedItems] = useState(displayItem);

  const handleSearch = (e: any) => {
    const query = e.target.value;
    if (query) {
      dispatch(searchCoins(query));
      setShowPopover(true);
    } else {
      setShowPopover(false);
      setDisplayedItems(displayItem);
    }
  };

  const handleScroll = () => {
    if (popoverContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        popoverContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setDisplayedItems((prev) => prev + displayItem);
      }
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowPopover(false), 5000);
  };

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  useEffect(() => {
    debounce(() => {
      setDisplayedItems(displayItem);
    }, 300);
  }, [searchResults]);
  let timer: NodeJS.Timeout | null = null;
  const debounce = (fun: any, delay: number) => {
    if (timer) clearInterval(timer);
    if (fun && delay)
      timer = setTimeout(() => {
        fun();
      }, delay);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/"><img className="nav-home" src="data:image/jpeg;base64,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" alt=""/>
        Crypto-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex gap-2">
            <Link to="/portfolio/coin">
              <Button variant="outline-success" className="btn-sm">
                Home
              </Button>
            </Link>
            <Link to="/portfolio/coin/favourite">
              <Button
                variant="favourite/"
                className="btn-sm"
                style={{ width: 200 }}
              >
                Linked Coins
              </Button>
            </Link>
            <div className="search-container">
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search Coins..."
                autoComplete="off"
                onBlur={handleBlur}
                ref={searchInputRef}
              />
              <i className="fas fa-search" id="search-icon"></i>
              <Overlay
                show={showPopover}
                target={searchInputRef.current}
                placement="bottom"
                containerPadding={20}
              >
                <Popover id="search-popover">
                  <Popover.Header as="h3">
                    Search Results
                    <span
                      style={{ float: "right", cursor: "pointer" }}
                      aria-hidden="true"
                      onClick={handleClosePopover}
                    >
                      &times;
                    </span>
                  </Popover.Header>
                  <Popover.Body
                    ref={popoverContentRef}
                    onScroll={handleScroll}
                    className="popover-content"
                  >
                    {searchResults.length > 0 ? (
                      <ul className="list-group">
                        {searchResults
                          .slice(0, displayedItems)
                          .map((coin: any, index: number) => (
                            <li
                              role="presentation"
                              className="list-group-item"
                              key={index}
                            >
                              <Link
                                className=""
                                to={"/portfolio/coin/detail/" + coin.id}
                              >
                                <img
                                  src={coin.image}
                                  style={{ width: "1.2rem" }}
                                  alt={coin.name}
                                />
                                &nbsp; &nbsp;
                                <span className="">
                                  {coin.name.substring(0, 25)}
                                </span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p>No results found</p>
                    )}
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
