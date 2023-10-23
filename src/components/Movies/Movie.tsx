import React, { useState, useEffect } from 'react';
import { IMovie } from '../../models/IMovie';
import { FaCheck } from 'react-icons/fa';

interface MovieProps {
  movie: IMovie;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const [isInWatched, setIsInWatched] = useState<boolean>(false);
  const [isInWantToWatch, setIsInWantToWatch] = useState<boolean>(false);

  useEffect(() => {
    const watchedMovies = JSON.parse(
      localStorage.getItem('watchedMovies') || '[]'
    );
    const wantToWatch = JSON.parse(localStorage.getItem('wantToWatch') || '[]');
    setIsInWatched(watchedMovies.some((m: IMovie) => m.Title === movie.Title));
    setIsInWantToWatch(
      wantToWatch.some((m: IMovie) => m.Title === movie.Title)
    );
  }, [movie]);

  const watchButtonLabel = isInWatched ? (
    <span className="flex items-center gap-2">
      {<FaCheck />} Already Watched
    </span>
  ) : (
    'Mark as Watched'
  );
  const wantToWatchButtonLabel = isInWantToWatch ? (
    <span className="flex items-center gap-2">
      {<FaCheck />} Already in Wishlist
    </span>
  ) : (
    'Add to Wishlist'
  );

  function addToWatched() {
    setIsInWantToWatch(false);
    setIsInWatched(true);

    const watchedMovies = JSON.parse(
      localStorage.getItem('watchedMovies') || '[]'
    );

    if (!watchedMovies.some((m: IMovie) => m.Title === movie.Title)) {
      watchedMovies.push(movie);
      localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    }

    const wantToWatch = JSON.parse(localStorage.getItem('wantToWatch') || '[]');
    const updatedWantToWatch = wantToWatch.filter(
      (m: IMovie) => m.Title !== movie.Title
    );
    localStorage.setItem('wantToWatch', JSON.stringify(updatedWantToWatch));
  }

  function addToWantToWatch() {
    setIsInWatched(false);
    setIsInWantToWatch(true);

    const wantToWatch = JSON.parse(localStorage.getItem('wantToWatch') || '[]');

    if (!wantToWatch.some((m: IMovie) => m.Title === movie.Title)) {
      wantToWatch.push(movie);
      localStorage.setItem('wantToWatch', JSON.stringify(wantToWatch));
    }

    const watchedMovies = JSON.parse(
      localStorage.getItem('watchedMovies') || '[]'
    );
    const updatedWatchedMovies = watchedMovies.filter(
      (m: IMovie) => m.Title !== movie.Title
    );
    localStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));
  }

  return (
    <div className="flex gap-8">
      <div className="flex gap-8">
        <img src={movie.Poster} alt={movie.Title} />

        <section>
          <header className="mb-4 flex items-center gap-2">
            <h1 className="text-xl text-slate-800 font-bold">{movie.Title}</h1>
            <span className="text-xl text-slate-800 font-bold">
              ({movie.Year})
            </span>
          </header>

          <div>
            <h2 className="text-slate-800">
              <span className="font-semibold">Genre:</span> {movie.Genre}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Director:</span> {movie.Director}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Runtime:</span> {movie.Runtime}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Language:</span> {movie.Language}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Country:</span> {movie.Country}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">Box Office:</span>{' '}
              {movie.BoxOffice}
            </h2>
            <h2 className="text-slate-800">
              <span className="font-semibold">IMDb rating:</span>{' '}
              {movie.Ratings[0].Value}
            </h2>
            <h2 className="text-slate-800 mt-4">
              <span className="font-semibold">Plot:</span>
            </h2>
            <p className="max-w-lg">{movie.Plot}</p>
          </div>

          <div className="mt-4 flex gap-8">
            <button
              className="rounded-md bg-gradient-to-tr from-blue-600 to-blue-400 py-2.5 px-7 text-sm font-bold text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={addToWatched}
            >
              {watchButtonLabel}
            </button>
            <button
              className="rounded-md bg-gradient-to-tr from-green-600 to-green-400 py-2.5 px-7 text-sm font-bold text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={addToWantToWatch}
            >
              {wantToWatchButtonLabel}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Movie;
