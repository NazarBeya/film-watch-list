import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Movie from '../components/Movies/Movie';
import { IMovie } from '../models/IMovie';
import popcornImage from '../assets/popcorn.svg';
import upsetGirl from '../assets/upset-girl.svg';

const SearchResult = () => {
  useEffect(() => {
    document.title = 'IMDb Watchlist';
  }, []);

  const [movie, setMovie] = useState<IMovie | null | undefined>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <main className="flex-1">
      <SearchBar setMovie={setMovie} setError={setError} />
      {error && <h1 className="text-red-400 text-center">{error}</h1>}
      {movie && <Movie movie={movie} />}
      {movie === undefined && (
        <div>
          <h1 className="text-center text-lg text-slate-700">
            Movie was not found :(
          </h1>
          <img
            src={upsetGirl}
            alt="Movie star"
            width={320}
            height={320}
            className="block mx-auto mt-12"
          />
        </div>
      )}
      {movie === null && (
        <img
          src={popcornImage}
          alt="Popcorn"
          width={320}
          height={320}
          className="block mx-auto mt-12"
        />
      )}
    </main>
  );
};

export default SearchResult;
