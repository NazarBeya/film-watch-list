import React, { useEffect } from 'react';
import Movie from './Movie';
import { IMovie } from '../../models/IMovie';

interface MoviesListProps {
  type: 'watched' | 'want-to-watch';
}

const MoviesList: React.FC<MoviesListProps> = ({ type }) => {
  useEffect(() => {
    type === 'watched'
      ? (document.title = 'IMDb Watchlist | Watched')
      : (document.title = 'IMDb Watchlist | Want to watch');
  }, [type]);

  function renderWatched() {
    const watchedMovies = JSON.parse(
      localStorage.getItem('watchedMovies') || '[]'
    );
    return (
      <div>
        {watchedMovies.length > 0 ? (
          watchedMovies.map((movie: IMovie) => (
            <Movie key={movie.Title} movie={movie} />
          ))
        ) : (
          <p className="text-lg text-slate-800">
            No movies in your watched list.
          </p>
        )}
      </div>
    );
  }

  function renderWantToWatch() {
    const wantToWatch = JSON.parse(localStorage.getItem('wantToWatch') || '[]');
    return (
      <div>
        {wantToWatch.length > 0 ? (
          wantToWatch.map((movie: IMovie) => (
            <Movie key={movie.Title} movie={movie} />
          ))
        ) : (
          <p className="text-lg text-slate-800">No movies in your wishlist.</p>
        )}
      </div>
    );
  }

  return (
    <main className="flex-1">
      {type === 'watched' && (
        <h1 className="mb-8 text-2xl text-slate-800 font-semibold">
          Watched movies
        </h1>
      )}
      {type === 'want-to-watch' && (
        <h1 className="mb-8 text-2xl text-slate-800 font-semibold">
          Want to watch
        </h1>
      )}
      {type === 'watched' && <div>{renderWatched()}</div>}
      {type === 'want-to-watch' && <>{renderWantToWatch()}</>}
    </main>
  );
};

export default MoviesList;
