import { dataFetching } from "../../api/dataFetching"
import MoviesPageContent from "@/components/MoviesPageContent"

function Upcoming({ movieData }) {
  return <MoviesPageContent movieData={movieData} />
}

export default Upcoming

export async function getServerSideProps(context) {
  return dataFetching(context)
}
