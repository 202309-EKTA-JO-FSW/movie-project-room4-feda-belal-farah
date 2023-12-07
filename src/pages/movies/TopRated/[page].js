import { dataFetching } from "../../api/dataFetching"
import MoviesPageContent from "@/components/MoviesPageContent"

function TopRated({ movieData }) {
  return <MoviesPageContent movieData={movieData} />
}

export default TopRated

export async function getServerSideProps(context) {
  return dataFetching(context)
}
