import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [movieFilter, setMovieFilter] = useState([]);
  const [actorFilter, setActorFilter] = useState([]);
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === '') {
      setMovieFilter([]);
      setActorFilter([]);
    } else {
      const movieResults = movie.filter(
        (movie) => movie.original_title.toLowerCase().includes(searchTerm)
      );
      const actorResults = actors.filter(
        (actor) => actor.original_name.toLowerCase().includes(searchTerm)
      );
      setMovieFilter(movieResults);
      setActorFilter(actorResults);
    }
  };

  useEffect(() => {
    setMovieFilter(movie);
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ecce4ad3b6b5a446528e30be3e9bd2ed')
      .then((res) => res.json())
      .then((data) => setMovie(data.results))
      .catch((error) => console.error('Error', error));
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?api_key=ecce4ad3b6b5a446528e30be3e9bd2ed')
      .then((res) => res.json())
      .then((data) => setActors(data.results))
      .catch((error) => console.error('Error', error));
  }, []);

  return (
    <form className='w-[500px] relative'>
      <input
        type="text"
        onInput={handleChange}
        className='searchBox'
        placeholder="Search Movie Title..."
      />
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <div className='movie-search' >
        {movieFilter.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className='movie-poster'
            />
            <h3>{movie.original_title}</h3>
          </div>
        ))}
        {actorFilter.map((actor) => (
          <div key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.original_name}
              className='movie-poster'
            />
            <h3>{actor.original_name}</h3>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Search;