import DataTable from "../components/shared/DataTable"
import { TABLE_HEADERS } from "../lib/constants/TableHeader"

const Users = () => {
    const { headers, apiStructure } = {
        headers: TABLE_HEADERS.USER,
        apiStructure: {
            version: 'v1',
            source: 'users',
        }
    }

    return (
        <DataTable value={{headers, apiStructure}}>
            
        </DataTable>
    )
}

export default Users