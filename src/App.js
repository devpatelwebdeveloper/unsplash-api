import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import PhotoCards from "./Components/PhotoCards/PhotoCards";
import TopBanner from "./Components/TopBanner/TopBanner";
import Container from "./Components/Container/Container";
import "./styles/App.scss";
// require("dotenv").config();

const App = () => {
  const [photo, setPhoto] = useState("");
  const clientID = process.env.REACT_APP_SECRET_KEY;
  const [next, setNext] = useState(1);

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleClick = (pageNo) => {
    setNext(pageNo);
    fetchData(pageNo);
  };

  function fetchData(pageNo) {
    dispatch({ type: "photos_fetch" });

    const url = `https://api.unsplash.com/search/photos?&query=${photo}&client_id=${clientID}&page=${pageNo}&per_page=30`;

    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: "photos_success",
          value: { photos: response.data },
        });
      })
      .catch((error) => {
        dispatch({ type: "photos_failure", value: { error: error } });
      });
  }

  const nextPage = (pageNo) => {
    setNext(pageNo);
    fetchData(pageNo);
  };

  const previousPage = (pageNo) => {
    if (pageNo > 1) {
      pageNo = pageNo - 1;

      setNext(pageNo);
      fetchData(pageNo);
    }

    return false;
  };

  const prevButton = (
    <button
      className={`button ${next === 1 ? "btn-disabled" : ""}`}
      disabled={next === 1 ? true : false}
      onClick={() => previousPage(next)}
    >
      Previous
    </button>
  );

  const nextButton = (
    <button
      className={`button ${next < data.total_pages ? "" : "btn-disabled"}`}
      disabled={next < data.total_pages ? false : true}
      onClick={() => nextPage(next + 1)}
    >
      Next
    </button>
  );

  return (
    <React.Fragment>
      {data.isLoading && <div class="loading"></div>}

      <TopBanner
        handleClick={handleClick}
        handleChange={handleChange}
        totalPages={data.total_pages}
        currentPage={next}
        totalImages={data.totalImages}
        prevBtn={prevButton}
        nextBtn={nextButton}
      />

      <Container>
        <div className="masonry">
          <PhotoCards photoList={data.photos} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
