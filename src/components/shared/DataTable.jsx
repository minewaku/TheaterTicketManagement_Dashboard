import { useState, useEffect } from 'react';
import { Table, TableContainer, TablePagination, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import { Paper, Checkbox } from '@mui/material'
import { FaArrowUp } from "react-icons/fa6";

const DataTable = (props) => {    
    const { headers, apiStructure } = props.value;
    const [data, setData] = useState([]);
    
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('asc');

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json'}
        };

        fetch(`https://jsonplaceholder.typicode.com/${apiStructure.source}?` + 
                        `&_page=${page}` +
                        `&_limit=${size}` + 
                        `&_sort=${sort}` +
                        `&_order=${order}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, [page, size, sort, order]);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeSize = (event) => {
      setSize(+event.target.value);
      setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table" size='big'>
                <TableHead>
                    <TableRow key={0}>
                        {headers.map((header) => (
                            <TableCell key={header.id} align={header.labelAlign}>
                                <div className='flex flex-row items-center font-bold'>
                                    <span className='pr-2 whitespace-nowrap'>{header.label}</span>
                                    <FaArrowUp className='size-3 text-gray-400'/>
                                </div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item) => (
                        <TableRow key={(item.id)}>
                            {headers.map((header) => (
                                <TableCell key={header.id} align={header.dataAlign}>
                                    {typeof item[header.id] === 'boolean' ? <Checkbox checked={item[header.id]}/> : item[header.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={10}
                rowsPerPage={size}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeSize}
            />
        </TableContainer>
    );
}

export default DataTable