import React, { useState, Dispatch, SetStateAction } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IMovie } from '../models/IMovie';
import api from '../api/movies';

interface SearchBarProps {
  setMovie: Dispatch<SetStateAction<IMovie | null | undefined>>;
  setError: Dispatch<SetStateAction<string | null>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setMovie, setError }) => {
  const API_KEY = '186be766';
  const [query, setQuery] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formattedQuery = query.replace(/ /g, '+');
    try {
      const response = await api.get(`/?t=${formattedQuery}&apikey=${API_KEY}`);
      console.log(response.data);
      setMovie(response.data.Error ? undefined : response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error: ', error);
        setError(`Error occurred: ${(error as Error).message}`);
      } else {
        console.error('Unknown error: ', error);
        setError('An unknown error occurred');
      }
    }
    setQuery('');
  }

  return (
    <form className="flex items-center mb-5" onSubmit={handleSubmit}>
      <label htmlFor="searchBar" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          id="searchBar"
          className="bg-slate-50 border border-slate-300 outline-none text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="py-2.5 px-4 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
