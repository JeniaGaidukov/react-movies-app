import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, SetMovies] = useState([]);
  const [loading, SetLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    SetLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        SetLoading(false);
        SetMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
        SetLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        SetMovies(data.Search);
        SetLoading(false);
      })
      .catch((err) => {
        console.error(err);
        SetLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export { Main };
