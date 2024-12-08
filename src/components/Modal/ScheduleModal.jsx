import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useModal, useForm } from '~/hooks';
import * as movieService from '~/services/movieService';
import * as roomService from '~/services/roomService';
import * as scheduleService from '~/services/scheduleService';
import dayjs from 'dayjs';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { useState, useEffect } from 'react';
import { TagButton } from '~/components/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const { post, del } = scheduleService;

const Create = () => {
    const [MOVIES, setMovies] = useState([]);
    const [ROOMS, setRooms] = useState([]);
    const { closeModal } = useModal();
    const { details, setDetails, handleChange, handleSubmit } = useForm({
        movieId: MOVIES?.[0]?.moviesId || '',
        ScheduleDetails: [],
    });

    const addSchedule = () => {
        setDetails((prev) => ({
            ...prev,
            ScheduleDetails: [...prev.ScheduleDetails, scheduleDetails],
        }));
        setScheduleDetails({
            roomNumber: ROOMS?.[0]?.roomNumber || '',
            showTime: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
            singleSeatPrice: 0,
            coupleSeatPrice: 0,
            createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
            status: '',
        });

        console.log(details);
    };

    const {
        details: scheduleDetails,
        setDetails: setScheduleDetails,
        handleChange: scheduleHandleChange,
        handleTime,
    } = useForm({
        roomNumber: ROOMS?.[0]?.roomNumber || '',
        showTime: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
        singleSeatPrice: 0,
        coupleSeatPrice: 0,
        createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
        status: '',
    });

    useEffect(() => {
        const fetchMoviesAndRooms = async () => {
            try {
                const movieResponse = await movieService.get({ page: 1, limit: 1000 });
                const roomResponse = await roomService.get({ page: 1, limit: 1000 });
                setMovies(movieResponse.records || []);
                setRooms(roomResponse.records || []);
            } catch (error) {
                console.error('Error fetching movies or rooms:', error);
            }
        };
        fetchMoviesAndRooms();
    }, []);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex max-h-[580px] w-[640px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, post, true)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Create</span>
                    </div>

                    <div className="flex w-full">
                        <div className="w-1/2 pe-2">
                            <div className="pb-4">
                                <FormControl fullWidth>
                                    <InputLabel>Movie</InputLabel>
                                    <Select
                                        id="movieId"
                                        value={details.movieId}
                                        disabled={details.ScheduleDetails.length > 0}
                                        label="movie"
                                        onChange={handleChange}
                                        name="movieId"
                                    >
                                        {MOVIES.map((item, index) => (
                                            <MenuItem key={index} value={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="pb-4">
                                <List component="div" className='min-h-[280px] overflow-y-scroll bg-secondary_bg'>
                                    {details.ScheduleDetails.map((item, index) => (
                                        <ListItem key={index} className='shadow-[0px_2px_0px_rgba(1,1,1,0.2)]'>
                                            {'Phòng: ' + item.roomNumber + ' | Chiếu: ' + item.showTime}
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>

                        <div className="w-1/2 pe-2">
                            <div className="pb-4">
                                <FormControl fullWidth>
                                    <InputLabel>Room</InputLabel>
                                    <Select
                                        id="roomNumber"
                                        value={scheduleDetails.roomNumber}
                                        label="Room"
                                        onChange={scheduleHandleChange}
                                        name="roomNumber"
                                    >
                                        {ROOMS.map((item, index) => (
                                            <MenuItem key={index} value={item.roomNumber}>
                                                {item.roomNumber}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="pb-4">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimeField
                                            name="showTime"
                                            value={dayjs(scheduleDetails.showTime)}
                                            onChange={(value) =>
                                                handleTime('showTime', value.format('YYYY-MM-DDTHH:mm:ss'))
                                            }
                                            label="Show time"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>

                            <div className="pb-4">
                                <TextField
                                    id="singleSeatPrice"
                                    label="Single seat price"
                                    name="singleSeatPrice"
                                    type="number"
                                    value={scheduleDetails.singleSeatPrice}
                                    onChange={scheduleHandleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                            <div className="pb-4">
                                <TextField
                                    id="coupleSeatPrice"
                                    label="Couple seat price"
                                    name="coupleSeatPrice"
                                    type="number"
                                    value={scheduleDetails.coupleSeatPrice}
                                    onChange={scheduleHandleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                            <div className="pb-4">
                                <TextField
                                    id="status"
                                    label="Status"
                                    name="status"
                                    value={scheduleDetails.status}
                                    onChange={scheduleHandleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <div className="flex items-center justify-center">
                                    <button
                                        type="button"
                                        className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80"
                                        onClick={addSchedule}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-4 pt-10">
                        <button
                            type="submit"
                            className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

const Delete = ({ ids }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleSubmit } = useForm(ids);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={() => closeModal()}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, del, true)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-lg font-bold">Schedule</span>
                    </div>

                    <span className="text-center text-lg font-bold">
                        Are you sure you want to delete {ids.join(', ')}?
                    </span>

                    <div className="flex items-center justify-center pt-10">
                        <button className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80">
                            Ok
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

const Inspect = ({ data }) => {
    const { closeModal } = useModal();
    const { details, handleTime, handleChange, handleArray, handleSubmit } = useForm({
        id: data.id,
        movie: {
            id: data.movie.id,
            name: data.movie.name,
            director: data.movie.director,
            actors: data.movie.actors,
            author: data.movie.author,
            description: data.movie.description,
            dub: data.movie.dub,
            subTitle: data.movie.subTitle,
            duration: data.movie.duration,
            genres: data.movie.genres,
            poster: data.movie.poster,
        },
        roomNumber: data.roomNumber,
        showTime: dayjs(data.showTime).format('YYYY-MM-DDTHH:mm:ss'),
        singleSeatPrice: data.singleSeatPrice,
        coupleSeatPrice: data.coupleSeatPrice,
        createdAt: dayjs(data.createdAt).format('YYYY-MM-DDTHH:mm:ss'),
        status: data.status,
    });

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex max-h-[580px] w-[640px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, post, true)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Schedule</span>
                    </div>

                    <div className="flex w-full">
                        <div className="w-1/2 pe-2">
                            <div className="pb-4">
                                <TextField
                                    id="id"
                                    label="Id"
                                    name="id"
                                    value={details.id}
                                    disabled
                                    type="text"
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <TextField
                                    id="roomNumber"
                                    label="Room number"
                                    name="roomNumber"
                                    value={details.roomNumber}
                                    type="text"
                                    disabled
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimeField
                                            name="showTime"
                                            value={dayjs(details.showTime)}
                                            disabled
                                            onChange={(value) =>
                                                handleTime('showTime', value.format('YYYY-MM-DDTHH:mm:ss'))
                                            }
                                            label="Show time"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>

                            <div className="pb-4">
                                <TextField
                                    id="singleSeatPrice"
                                    label="Single seat price"
                                    name="singleSeatPrice"
                                    type="number"
                                    disabled
                                    value={details.singleSeatPrice}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <TextField
                                    id="coupleSeatPrice"
                                    label="Couple seat price"
                                    name="coupleSeatPrice"
                                    type="number"
                                    disabled
                                    value={details.coupleSeatPrice}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <DateTimeField
                                            name="createdAt"
                                            value={dayjs(details.createdAt)}
                                            disabled
                                            onChange={(value) =>
                                                handleTime('createdAt', value.format('YYYY-MM-DDTHH:mm:ss'))
                                            }
                                            label="Show time"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>

                            <div className="pb-4">
                                <TextField
                                    id="status"
                                    label="Status"
                                    name="status"
                                    type="text"
                                    disabled
                                    value={details.status}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                        </div>

                        <div className="w-1/2 pe-2">
                            <div className="mb-4 text-center text-xl font-medium">Movie</div>
                            <div className="px-2">
                                <div className="text-base">
                                    <span className="me-2 font-bold">Id: </span>
                                    <span>{details.movie.id}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Name: </span>
                                    <span>{details.movie.name}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Director: </span>
                                    <span>{details.movie.director}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Actors: </span>
                                    <span>{details.movie.actors}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Author: </span>
                                    <span>{details.movie.author}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Dub: </span>
                                    <span>{details.movie.dub}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Subtitle: </span>
                                    <span>{details.movie.subTitle}</span>
                                </div>
                                <div className="text-base">
                                    <span className="me-2 font-bold">Duration: </span>
                                    <span>{details.movie.duration}</span>
                                </div>
                                <div className="text-base">
                                    <div className="mb-2 me-2 font-bold">Description: </div>
                                    <textarea
                                        disabled
                                        rows={5}
                                        className="w-full bg-secondary_bg p-2"
                                        value={details.movie.description}
                                    />
                                </div>
                                <div className="pb-4">
                                    <div className="mb-2 me-2 font-bold">Genres: </div>

                                    <div className="flex w-full flex-wrap gap-2 rounded-md p-4">
                                        {details.movie.genres.map((genre, index) => (
                                            <TagButton
                                                key={index}
                                                value={genre}
                                                onClick={handleArray}
                                                label={genre}
                                                id="genres"
                                                name="genres"
                                                disabled
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-4 pt-10">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80"
                        >
                            Exit
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default { Create, Delete, Inspect };
