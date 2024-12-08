import { DataTable } from "~/components/Table"
import { TABLE_HEADERS } from "~/store/constants"
import { MovieModal } from "~/components/Modal"
import { SIZE_OPTIONS_1 } from "~/store/constants"
import * as movieService from '~/services/movieService';

const Movies = () => {
    return <DataTable label="Movie" headers={TABLE_HEADERS.MOVIES} modals={MovieModal} sizeOptions={SIZE_OPTIONS_1} apiServices={movieService}></DataTable>
}

export default Movies
