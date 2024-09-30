import DataTable from "../components/shared/DataTable"
import { TABLE_HEADERS } from "../lib/constants/TableHeader"

const Jobs = () => {
    const props = {
        headers: TABLE_HEADERS.JOBS,
        apiStructure: {
            version: 'v1',
            source: 'todos',
        }
    }

    return (
        <DataTable value={props}>
            
        </DataTable>
    )
}

export default Jobs