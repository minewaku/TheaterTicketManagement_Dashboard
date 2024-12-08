import { DataTable } from "~/components/Table"
import { TABLE_HEADERS } from "~/store/constants"
import { RoomModal } from "~/components/Modal"
import { SIZE_OPTIONS_1 } from "~/store/constants"
import * as roomService from '~/services/roomService';

const Rooms = () => {
    return <DataTable label="Room" headers={TABLE_HEADERS.ROOMS} modals={RoomModal} sizeOptions={SIZE_OPTIONS_1} apiServices={roomService}></DataTable>
}

export default Rooms