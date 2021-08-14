import React, { useState } from "react";
import "./styles.css";

const AllSeries = {
  Technology: [
    { name: "The Imitation Game", rating: "4.5/5 - This movie is a biography about Alan Turing and his invention of world's first AI which saved the world from ongoing world War II." },
    { name: "Interstellar", rating: "5/5 - This movie is a mind blowing movie based on the space time paradox, where the present is tried to be manipulated by the future of a person but things doesn't changes as it will change the nature and the balance of the situation." },
    { name: "The Social Dilemma", rating: " 4.5/5 - This is a documentary moe than a movie and it tell sus the dark secrets of the social media and how it manipulate us." }
  ],

  Entrepreneurship: [
    {
      name: "The Founder",
      rating: "4.5/5 - This movie is about the founder of MacDonalds who was actually not the founder of MacDonalds! weird? Right, well this is the story of legendary Raymond Albert Kroc."
    },
    {
      name: "Wolf of wall street",
      rating: "4.5/5 - This movie is a story of Jordan Belfort, who made a lot of money making fool of people and ended up in jail."
    },
    {
      name: "Guru",
      rating: "4.5/5 - This movie is about the story of Dhirubhai Ambani, about his struggles and the will power the man had to succeed."
    }
  ],
  Inspirational: [
    {
      name: "The Social Network",
      rating: "4.5/5 - Story of Mark Zuckerburg, How the 19 year old sophomore who was suspended from Harward college and never went back but built one of the most Successful internet comapany. "
    },
    {
      name: "The White Tiger",
      rating: "4.5/5 - Movie based out of the novel The white tiger by Aravind Adiga, the story of a bengaluru based entrepreneur who paved his path through a village which might not be even on the map of India. "
    },
    {
      name: "Jobs",
      rating: "5/5 - The story of the Legend, Steve Jobs, his life journey, his failures, his principal, the extraordinary piece."
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
