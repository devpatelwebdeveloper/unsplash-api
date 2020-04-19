import React, { useState } from "react";
import "./TopBanner.scss";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";

export default function TopBanner({
  handleClick,
  handleChange,
  totalImages,
  currentPage,
  totalPages,
  prevBtn,
  nextBtn,
}) {
  const [searched, setSearched] = useState(false);
  return (
    <section className="TopBanner">
      <Container>
        <h1 className="heading">Unsplash Image Search</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearched(true);
            handleClick(1);
          }}
        >
          <Row>
            <Col col="7" offset="2">
              <input
                className="input-group__input"
                id="photo"
                type="text"
                placeholder="Search Amazing Splash"
                onChange={handleChange}
              />
            </Col>
            <Col col="1">
              <input type="submit" />
            </Col>
          </Row>
        </form>
        <div className={searched ? "contains visible" : "contains"}>
          <Row>
            <Col col="2" offset="2">
              {prevBtn}
            </Col>
            <Col col="2">
              <p>Total images found: {totalImages}</p>
            </Col>
            <Col col="2">
              <p>
                {" "}
                Page {currentPage} of {totalPages}
              </p>
            </Col>
            <Col col="2">{nextBtn}</Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
