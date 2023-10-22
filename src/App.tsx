import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import MoviesList from './components/Movies/MoviesList';
import SearchResult from './pages/SearchResult';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchResult />} />
        <Route path="watched" element={<MoviesList type="watched" />} />
        <Route
          path="want-to-watch"
          element={<MoviesList type="want-to-watch" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
