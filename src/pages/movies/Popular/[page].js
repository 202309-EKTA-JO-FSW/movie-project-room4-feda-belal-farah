import { dataFetching } from "../../api/dataFetching"
import MoviesPageContent from "@/components/MoviesPageContent"

function Popular({ movieData }) {
  return <MoviesPageContent movieData={movieData} />
}

export default Popular

export async function getServerSideProps(context) {
  return dataFetching(context)
}
