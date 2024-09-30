import DataTable from "../components/shared/DataTable"
import { TABLE_HEADERS } from "../lib/constants/TableHeader"

const Posts = () => {
    const { headers, apiStructure } = {
        headers: TABLE_HEADERS.POSTS,
        apiStructure: {
            version: 'v1',
            source: 'posts',
        }
    }

    return (
        <DataTable value={{ headers, apiStructure }}>
            
        </DataTable>
    )
}

export default Posts