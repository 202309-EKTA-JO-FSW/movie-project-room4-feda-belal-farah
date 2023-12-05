import Link from 'next/link'
import { useState, useEffect } from 'react'
import ActorImages from './ActorImages';

export default function Actors(){

const [popularPeople, setPopularPeople] = useState([]);
//** Retrive Populer People  */
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2NlNGFkM2I2YjVhNDQ2NTI4ZTMwYmUzZTliZDJlZCIsInN1YiI6IjY1NjRiYTNlZWRlYjQzMDBhZDBmY2ZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PwMEOd_beX4PBjmIXuJtNEaGQqabKX_-WZzvNlGIW4'
    }
  };
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
      .then((res) => res.json())
      .then((data) => {
        setPopularPeople(data.results);
      })
      .catch(error => {
        console.error('Error fetching  popularPeople path:', error);
      });
  }, [])

//** Diplay Populer People using Tailwind CSS  */
   return (

    <div className="bg-gray-900 text-white min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Popular People</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularPeople.map((person) => (
          <div key={person.id} className="bg-gray-800 rounded-lg shadow-md p-4">
         <Link href={`/actors/${person.id}`}>

            <img
              src={ `https://image.tmdb.org/t/p/original${person.profile_path}` }
              alt={`${person.name} profile`}
              className="w-full rounded-lg mb-4"
            />
         </Link>
         <Link href={`/actors/${person.id}`}>

            <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
            </Link>
            <p className="text-gray-300">{person.knownFor}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
      );
    };
