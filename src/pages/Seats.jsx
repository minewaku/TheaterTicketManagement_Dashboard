import * as roomService from '~/services/roomService';
import * as seatService from '~/services/seatService';
import { useState, useEffect } from 'react';
import { Button } from '~/components/Button';
import { Input } from '@mui/material';
import classNames from 'classnames';
import Grid from '@mui/material/Grid2';
import { useModal } from '~/hooks';
import { SeatModal } from '../components/Modal';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';

import { RiLoopLeftFill } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Seats = () => {
    const { modal, openModal } = useModal();

    const [roomList, setRoomList] = useState([]);

    const [currentSeatList, setCurrentSeatList] = useState([]);
    const [newSeatList, setNewSeatList] = useState([]);

    const [selectedRoom, setSelectedRoom] = useState(null);

    const [isCouple, setIsCouple] = useState(false);
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    const [minRow, setMinRow] = useState(0);
    const [minCol, setMinCol] = useState(0);

    // UTIL FUNCTIONS
    const generateSeat = (row, col) => {
        return {
            roomNumber: selectedRoom,
            row: convertNumberToAlphabet(row),
            column: col.toString(),
            seatType: isCouple ? 'couple' : 'single',
        };
    };

    function isSeatValid(row, column, seatType) {
        console.log('row, column, seatType: ', typeof row, typeof column, typeof seatType);

        // Check if the seat is within grid bounds
        const rowNum = convertAlphabetToNumber(row);
        const colNum = parseInt(column, 10);
        if (rowNum < 1 || rowNum > cols || colNum < 1 || colNum > cols) {
            return false; // Out of grid bounds
        }

        // Helper function to check if a seat exists in a list
        const isSeatTaken = (list, row, column) =>
            list.some((seat) => seat.row === row && parseInt(seat.column, 10) === column);

        // Check if the seat already exists in either list
        if (isSeatTaken(newSeatList, row, colNum) || isSeatTaken(currentSeatList, row, colNum)) {
            return false; // Seat is already taken
        }

        // Additional logic for "couple" seat type
        if (seatType === 'couple') {
            // Couple seats require the adjacent seat to be valid (right seat)
            const adjacentColumn = colNum + 1;

            // Check if the adjacent seat is within bounds
            if (adjacentColumn > cols) {
                return false; // Adjacent seat out of bounds
            }

            // Check if the adjacent seat is taken
            if (isSeatTaken(newSeatList, row, adjacentColumn) || isSeatTaken(currentSeatList, row, adjacentColumn)) {
                return false; // Adjacent seat is already taken
            }
        }

        return true; // Seat is valid
    }

    const findMinRow = (seats) => {
        return seats.reduce((max, seat) => {
            const rowNumber = convertAlphabetToNumber(seat.row);
            return rowNumber > max ? rowNumber : max;
        }, 0); // Start with 0 since rows are positive integers
    };

    const findMinCol = (seats) => {
        return seats.reduce((max, seat) => {
            const columnNumber = parseInt(seat.column, 10);
            return columnNumber > max ? columnNumber : max;
        }, 0); // Start with 0 since columns are positive integers
    };

    const convertNumberToAlphabet = (number) => {
        return String.fromCharCode(64 + number);
    };

    const convertAlphabetToNumber = (alphabet) => {
        return alphabet.toUpperCase().charCodeAt(0) - 64;
    };

    const fetchData = async () => {
        const tempList = await roomService.get({ page: 1, limit: 1000 });
        setRoomList(tempList.records);
    };

    const handleType = (status) => {
        setIsCouple(status);
    };

    // BUTTON ACTIONS
    const handleSelectRoom = async (e) => {
        const roomId = e.target.value;
        setSelectedRoom(roomId);

        try {
            const seats = await seatService.getByRoom(roomId);
            setCurrentSeatList(seats);
            setRows(findMinRow(seats));
            setCols(findMinCol(seats));

            setMinCol(findMinCol(seats));
            setMinRow(findMinRow(seats));

            console.log('minCol, minRow: ', minCol, minRow);
            console.log('minRow: ', findMinRow(seats));
            console.log('minCol: ', findMinCol(seats));
            console.log('minCol, minRow: ', typeof minCol, typeof minRow);
            console.log('rows, cols: ', rows, cols);
        } catch (error) {
            toast.error('Error fetching seats:', error);
        }
    };

    // const handleEditCurrentSeat = (seat) => {
    //     if (isSeatValid(seat.row, seat.column, seat.seatType === 'couple' ? 'single' : 'couple')) {
    //         openModal(
    //             <SeatModal.Edit data={{ ...seat, seatType: seat.seatType === 'couple' ? 'single' : 'couple' }} />
    //         );
    //     } else {
    //         alert('Invalid position for this seat');
    //     }
    // };

    const handleEditCurrentSeat = (seat) => {
        if (isSeatValid(seat.row, seat.column, seat.seatType === 'couple' ? 'single' : 'couple')) {
            openModal(
                <SeatModal.Edit data={{ ...seat, seatType: seat.seatType === 'couple' ? 'single' : 'couple' }} />
            );
        } else {
            // Check if the seat exists in the currentSeatList
            const existingSeat = currentSeatList.find((s) => s.row === seat.row && s.column === seat.column);

            if (existingSeat) {
                if (seat.seatType === 'couple') {
                    // Allow changing from double to single unconditionally
                    openModal(<SeatModal.Edit data={{ ...seat, seatType: 'single' }} />);
                    return;
                } else if (seat.seatType === 'single') {
                    // Check if the next seat is occupied
                    const nextSeat = currentSeatList.find(
                        (s) => s.row === seat.row && parseInt(s.column, 10) === parseInt(seat.column, 10) + 1
                    );

                    if (!nextSeat) {
                        // Allow changing from single to couple if the next seat is not occupied
                        openModal(<SeatModal.Edit data={{ ...seat, seatType: 'couple' }} />);
                        return;
                    } else {
                        alert('Invalid position for this seat 1');
                    }
                } else {
                    alert('Invalid position for this seat 2');
                }
            } else {
                alert('Invalid position for this seat 3');
            }
        }
    };

    const handleDeleteCurrentSeat = (seat) => {
        openModal(<SeatModal.Delete ids={[seat.id]} />);
    };

    const handleSubmitAction = () => {
        openModal(<SeatModal.Create data={newSeatList} />);
    };

    // Hàm xử lý khi chọn ghế
    const handleCreateNewSeat = (seat) => {
        setNewSeatList((prevSeatList) => {
            const isValid = isSeatValid(seat.row, seat.column, isCouple ? 'couple' : 'single');
            console.log('isValid: ', isValid);
            console.log('seat: ', seat);
            if (isValid) {
                // Add the new seat if valid
                return [...prevSeatList, seat];
            } else {
                const seatExists = prevSeatList.some((s) => s.row === seat.row && s.column === seat.column);
                if (seatExists) {
                    // Remove the existing seat if it's already in the list
                    return prevSeatList.filter((s) => !(s.row === seat.row && s.column === seat.column));
                } else {
                    alert('Invalid position for this seat');
                    return prevSeatList; // No changes to the seat list
                }
            }
        });

        console.log('newSeatList', newSeatList);
    };

    //useEffect
    useEffect(() => {
        fetchData();
        toast.info('Select a room to start managing seats');
    }, []);

    useEffect(() => {
        setMinRow(
            findMinRow(currentSeatList) > findMinRow(newSeatList)
                ? findMinRow(currentSeatList)
                : findMinRow(newSeatList)
        );
        setMinCol(
            findMinCol(currentSeatList) > findMinCol(newSeatList)
                ? findMinCol(currentSeatList)
                : findMinCol(newSeatList)
        );
    }, [rows, cols]);

    return (
        //Display room list
        <div className="">
            <div className="mb-4 flex flex-col overflow-x-auto rounded-lg bg-white p-2">
                <div className="flex space-x-4 overflow-x-auto">
                    {roomList.map((room, index) => (
                        <Button
                            key={index}
                            onClick={handleSelectRoom}
                            value={room.roomNumber}
                            className={classNames(
                                selectedRoom === room.roomNumber ? 'bg-primary' : 'bg-secondary',
                                'flex-shrink-0 rounded-lg bg-secondary px-4 py-2 font-semibold text-white transition duration-300 hover:bg-primary'
                            )}
                        >
                            {room.roomNumber}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Hiển thị danh sách ghế */}
            <div className="flex space-x-8 rounded-md bg-white p-8 text-center">
                <div className="w-full basis-[80%]">
                    <div
                        className="mb-4 grid gap-x-1 gap-y-2"
                        style={{
                            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                        }}
                    >
                        {Array.from({ length: rows * cols }, (_, index) => {
                            const row = Math.floor(index / cols) + 1; // Calculate row number (1-indexed)
                            const col = (index % cols) + 1; // Calculate column number (1-indexed)

                            const rowLabel = convertNumberToAlphabet(row);

                            // Keep track of columns already rendered
                            const occupiedColumns = new Set();

                            // Skip rendering if this column is already part of a couple seat
                            if (occupiedColumns.has(`${row}-${col}`)) {
                                return null;
                            }

                            // Find the corresponding seat in current and new seat lists
                            const currentSeat = currentSeatList.find(
                                (seat) => seat.row === rowLabel && parseInt(seat.column, 10) === col
                            );

                            const newSeat = newSeatList.find(
                                (seat) => seat.row === rowLabel && parseInt(seat.column, 10) === col
                            );

                            const seat = currentSeat || newSeat;
                            const seatType = seat?.seatType || 'single';
                            const gridColumnEnd = seatType === 'couple' ? 'span 2' : 'span 1';

                            // Mark adjacent column as occupied for couple seats
                            if (seatType === 'couple') {
                                occupiedColumns.add(`${row}-${col + 1}`);
                            }

                            const isInCurrentSeatList = !!currentSeat;
                            const isInNewSeatList = !!newSeat;

                            return isInCurrentSeatList ? (
                                <Popover
                                    key={`${row}-${col}`}
                                    style={{
                                        gridColumn: col,
                                        gridRow: row,
                                        gridColumnEnd,
                                    }}
                                    className="relative flex items-center justify-center"
                                >
                                    <PopoverButton className="flex h-full w-full items-center justify-center rounded-md bg-primary py-2 font-medium text-white transition duration-200 hover:bg-secondary">
                                        {rowLabel}
                                        {col}
                                    </PopoverButton>

                                    <PopoverPanel className="absolute inset-0 flex divide-x divide-white rounded-md bg-secondary">
                                        <Button
                                            onClick={() => handleEditCurrentSeat(currentSeat)}
                                            className="flex basis-1/2 items-center justify-center rounded-s-md text-white hover:bg-primary"
                                        >
                                            <RiLoopLeftFill className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            onClick={() => handleDeleteCurrentSeat(currentSeat)}
                                            className="flex basis-1/2 items-center justify-center rounded-e-md text-white hover:bg-primary"
                                        >
                                            <FaRegTrashAlt className="h-4 w-4" />
                                        </Button>
                                    </PopoverPanel>
                                </Popover>
                            ) : (
                                <button
                                    key={`${row}-${col}`}
                                    className={classNames(
                                        isInNewSeatList ? 'z-10 bg-success' : 'bg-gray-400',
                                        'flex cursor-pointer items-center justify-center rounded-md py-2 font-medium text-white transition duration-200 hover:bg-success'
                                    )}
                                    style={{
                                        gridColumn: col,
                                        gridRow: row,
                                        gridColumnEnd,
                                    }}
                                    onClick={() => handleCreateNewSeat(generateSeat(row, col))}
                                >
                                    {rowLabel}
                                    {col}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex justify-between">
                        <div className="flex space-x-8">
                            <div className="flex items-center">
                                <div className="me-2 h-3 w-3 rounded-sm bg-primary" />
                                <div className="text-xs font-semibold">Current seats</div>
                            </div>

                            <div className="flex items-center">
                                <div className="me-2 h-3 w-3 rounded-sm bg-success" />
                                <div className="text-xs font-semibold">New seats</div>
                            </div>
                        </div>

                        <div className="">
                            <span className="text-sm font-semibold text-error">
                                {newSeatList.length} new seats have been selected
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex basis-[20%] flex-col">
                    <div className="pb-4">
                        <div className="pb-2 text-center text-2xl font-medium">Seat type</div>
                        <div className="flex justify-evenly">
                            <Button
                                className={classNames(
                                    isCouple
                                        ? 'duraion-300 bg-white text-secondary shadow-[inset_0_0_0_1px_var(--color-secondary)] transition hover:bg-secondary hover:text-secondary_bg'
                                        : 'bg-secondary text-secondary_bg',
                                    'cursor-pointer rounded-md px-4 py-1'
                                )}
                                onClick={() => handleType(false)}
                            >
                                Single
                            </Button>

                            <Button
                                className={classNames(
                                    isCouple
                                        ? 'bg-secondary text-secondary_bg'
                                        : 'duraion-300 bg-white text-secondary shadow-[inset_0_0_0_1px_var(--color-secondary)] transition hover:bg-secondary hover:text-secondary_bg',
                                    'cursor-pointer rounded-md px-4 py-2'
                                )}
                                onClick={() => handleType(true)}
                            >
                                Couple
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="pb-2 text-center text-2xl font-medium">Seat grid</div>
                        <Grid container columnGap={1}>
                            <Grid item size={3} container alignItems="center">
                                <span>Row:</span>
                            </Grid>
                            <Grid item size={8}>
                                <Input
                                    type="number"
                                    min="0"
                                    value={rows}
                                    className="rounded-sm border-black ps-2 text-center"
                                    onChange={(e) =>
                                        Number(e.target.value) < minRow ? minRow : setRows(Number(e.target.value))
                                    }
                                />
                            </Grid>

                            <Grid item size={3} container alignItems="center">
                                <span>Column:</span>
                            </Grid>
                            <Grid item size={8}>
                                <Input
                                    type="number"
                                    min="0"
                                    value={cols}
                                    className="rounded-sm border-black ps-2 text-center"
                                    onChange={(e) =>
                                        Number(e.target.value) < minCol ? minCol : setCols(Number(e.target.value))
                                    }
                                />
                            </Grid>
                        </Grid>

                        <div className="mt-20">
                            <Button
                                onClick={handleSubmitAction}
                                className="rounded-md bg-secondary px-8 py-2 text-sm font-semibold text-white shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),0_2px_2px_0_rgba(0,0,0,0.14),0_1px_5px_0_rgba(0,0,0,0.12)]"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {modal}
        </div>
    );
};

export default Seats;

// toast, table ticket, table payment, upadte checkrole, fix ui, add search bar, add, statictis
