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
    fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=2', options)
      .then((res) => res.json())
      .then((data) => {
        setPopularPeople(data.results);
      })
      .catch(error => {
        console.error('Error fetching image path:', error);
      });
  }, [])

//** Diplay Populer People using Tailwind CSS  */
   return (
    <div className="container-ActorDetails">
    {popularPeople.map(person => (
     <div className="flex flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <div key={person.id}
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
            <ActorImages personId={person.id} />
            </div>
            <div className="flex flex-col justify-start p-6">
            <h5
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            <strong>
            {person.name}
            </strong>
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200" >
            <p>Poularity : {person.popularity}</p>  
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
            <p>known_for : {person.known_for_department} </p>  
            </p>
            </div>
            
     </div>
      ))}
</div>
      );
    };
