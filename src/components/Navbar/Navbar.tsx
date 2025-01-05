import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useDispatch, useSelector } from "react-redux";
import { coinsSelector, searchCoins } from "../../redux/reducers/cryptoReducer";
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
      const { scrollTop, scrollHeight, clientHeight } = popoverContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setDisplayedItems((prev) => prev + displayItem);
      }
    }
  };

  const handleBlur = () => {
    // setTimeout(() => setShowPopover(false), 5000);
  };

  const handleClosePopover = () => {
    setShowPopover(false);
    setDisplayedItems(displayItem);
  };

  useEffect(() => {
    setDisplayedItems(displayItem);
  }, [searchResults]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Crypto-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Form className="d-flex gap-2">
            <Button variant="outline-success" className="btn-sm">Home</Button>
            <Button variant="outline-success" className="btn-sm" style={{ width: 200 }}>
              Linked Coins
            </Button>
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
                    <span style={{ float: 'right', cursor: 'pointer' }} aria-hidden="true" onClick={handleClosePopover}>&times;</span>
                  </Popover.Header>
                  <Popover.Body ref={popoverContentRef} onScroll={handleScroll} className="popover-content">
                    {searchResults.length > 0 ? (
                      <ul className="list-group">
                        {searchResults.slice(0, displayedItems).map((coin: any, index: number) => (
                          <li role="presentation" className="list-group-item" key={index}>
                            <Link className="" to={"/detail/"+coin.id}>
                              <img src={coin.image} style={{ width: '1.2rem' }} alt={coin.name} />
                              &nbsp;
                              &nbsp;
                              <span className="">{coin.name.substring(0,25)}</span>
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
