import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Actors({actors}){

const [popularPeople, setPopularPeople] = useState([]);

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
  }, [])

    return (
        <div className="App">
        <h1 className="geeks">popular person</h1>
        <div className="container" class="flex">
        {popularPeople.map(person => (
                <div className="actor">
                    <ol key={person.id}>
                        <div>
                            <strong>
                                {"Actot Name: "}
                            </strong>
                            {person.name},
                        </div>
                        <div>
                        <strong>
                        popularity: {person.popularity},
                        </strong>
                        </div>
                        <div>
                        <strong>
                        known_for_department: {person.known_for_department}
                        </strong>
                        </div>
                    </ol>
                </div>
            ))}
        </div>
    </div>
       
      );
    };
