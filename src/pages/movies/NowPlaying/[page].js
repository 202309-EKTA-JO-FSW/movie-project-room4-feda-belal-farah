import MoviesPageContent from "@/components/MoviesPageContent"
import { dataFetching } from "../../api/dataFetching"

function NowPlaying({ movieData }) {
  return <MoviesPageContent movieData={movieData} />
}

export default NowPlaying

export async function getServerSideProps(context) {
  return dataFetching(context)
}
