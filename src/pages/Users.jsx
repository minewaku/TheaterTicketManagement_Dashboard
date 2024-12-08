import { DataTable } from "~/components/Table"
import { TABLE_HEADERS } from "~/store/constants"
import { UserModal } from "~/components/Modal"
import { SIZE_OPTIONS_1 } from "~/store/constants"
import * as userService from '~/services/userService';

const Users = () => {
    return <DataTable label="User" headers={TABLE_HEADERS.USERS} modals={UserModal} sizeOptions={SIZE_OPTIONS_1} apiServices={userService}></DataTable>
}

export default Users
