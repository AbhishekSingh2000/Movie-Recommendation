import React, { useState } from "react";
import "./styles.css";

const AllSeries = {
  Technology: [
    { name: "The Imitation Game", rating: "4.5/5" },
    { name: "The Social Dilemma", rating: " 4.5/5" }
  ],

  Entrepreneurship: [
    {
      name: "The Founder",
      rating: "4.5/5"
    },
    {
      name: "Guru",
      rating: "4.5/5"
    }
  ],
  Inspirational: [
    {
      name: "The Social Network",
      rating: "4.5/5"
    },
    {
      name: "Jobs",
      rating: "5/5"
    }
  ]
};

const genreNames = Object.keys(AllSeries);
console.log(genreNames);

export default function App() {
  const [seriesList, setSeriesList] = useState(AllSeries.Technology);

  function genreClickHandler(genre) {
    const series = AllSeries[genre];
    setSeriesList(series);
  }

  function getSeriesPost(series) {
    const name = series.name;
    const rating = series.rating;
    const htmlOfList = (
      <li className="list-item">
        <div>
          <h3>{name}</h3>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>Best Movies</h1>
      <p>Checkout best Movies. Select a genre to Enjoy</p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr />
      <ul className="unlist">
        <li className="list">
          {" "}
          {seriesList.map((series) => {
            return getSeriesPost(series);
          })}{" "}
        </li>
      </ul>
    </div>
  );
}
