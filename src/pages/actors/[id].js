import actorinfo from './Body'

const POST_URL = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'

export async function getStaticPaths() {
    const response = await fetch (POST_URL);
    const actor = await response.json();
    const paths =actor.map((actor)=>(
        {
            params:{id: actor.id.toString()},
        }
    ));
    return {
      paths,
      fallback: false, // false or "blocking"
    };
}