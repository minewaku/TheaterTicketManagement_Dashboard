import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ROLES, DEPARTMENTS } from '~/store/constants';
import { useModal, useForm } from '~/hooks';
import * as roomService from '~/services/roomService';
import { TagButton } from '~/components/Button';

const { post, put, del } = roomService;

const Create = ({ loading }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleArray, handleSubmit } = useForm({
        roomNumber: '',
        availableSeat: 0,
        singleSeat: 0,
        coupleSeat: 0,
    });

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, post)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Create</span>
                    </div>

                    <div className="w-full">
                        <TextField
                            id="roomNumber"
                            label="Room number"
                            name="roomNumber"
                            type="text"
                            defaultValue={details.roomNumber}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                        />

                        <TextField
                            id="availableSeat"
                            label="Total seat"
                            name="availableSeat"
                            type="number"
                            value={details.availableSeat}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                        />

                        <TextField
                            id="Single seat"
                            label="singleSeat"
                            name="singleSeat"
                            type="number"
                            value={details.singleSeat}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                        />

                        <TextField
                            id="coupleSeat"
                            label="Couple seat"
                            name="coupleSeat"
                            type="number"
                            value={details.coupleSeat}
                            onChange={handleChange}
                            variant="filled"
                            fullWidth
                        />
                    </div>

                    <div className="flex items-center justify-center pt-10">
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

const Edit = ({ data }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleArray, handleSubmit } = useForm({
        id: data.id,
        roomNumber: data.roomNumber,
        availableSeat: data.availableSeat,
        singleSeat: data.singleSeat,
        coupleSeat: data.coupleSeat,
    });
    console.log('Details in Edit: ', details);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, put)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Edit</span>
                    </div>

                    <div className="flex w-full flex-col justify-between">
                        <div className="w-full">
                            <TextField
                                id="id"
                                label="ID"
                                name="id"
                                type="text"
                                disabled
                                value={details.roomNumber}
                                onChange={handleChange}
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                id="roomNumber"
                                label="Room number"
                                name="roomNumber"
                                type="text"
                                disabled
                                value={details.roomNumber}
                                onChange={handleChange}
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                id="availableSeat"
                                label="Total seat"
                                name="availableSeat"
                                type="number"
                                value={details.availableSeat}
                                onChange={handleChange}
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                id="Single seat"
                                label="singleSeat"
                                name="singleSeat"
                                type="number"
                                value={details.singleSeat}
                                onChange={handleChange}
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                id="coupleSeat"
                                label="Couple seat"
                                name="coupleSeat"
                                type="number"
                                value={details.coupleSeat}
                                onChange={handleChange}
                                variant="filled"
                                fullWidth
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-10">
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
                <form onSubmit={(e) => handleSubmit(e, del)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-lg font-bold">User</span>
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

export default { Create, Edit, Delete };
