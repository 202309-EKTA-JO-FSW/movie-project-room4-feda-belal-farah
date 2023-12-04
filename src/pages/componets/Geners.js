import React, { useState, useEffect } from 'react';

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ecce4ad3b6b5a446528e30be3e9bd2ed')
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
  }, []);

  return (
    <ul className="dropdown-menu">
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default Genres;
