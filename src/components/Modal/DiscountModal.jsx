import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FOOD_TYPES, SEAT_TYPES } from '../../store/constants';
import { ImagePreview } from '~/components/Input';
import { useModal, useForm } from '~/hooks';
import * as discountService from '~/services/discountService';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const { post, put, del } = discountService;

const Create = () => {
    const { closeModal } = useModal();
    const { details, handleChange, handleSubmit } = useForm({
        foodType: '',
        seatType: '',
        percentOff: 0,
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

                    <div className="flex flex-col">
                        <div className="pb-4">
                            <FormControl fullWidth>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    id="foodType"
                                    value={details.foodType}
                                    label="type"
                                    onChange={handleChange}
                                    name="foodType"
                                >
                                    {FOOD_TYPES.map((type, index) => (
                                        <MenuItem key={index} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="pb-4">
                            <FormControl fullWidth className="mb-4">
                                <InputLabel>Type</InputLabel>
                                <Select
                                    id="seatType"
                                    value={details.seatType}
                                    label="type"
                                    onChange={handleChange}
                                    name="seatType"
                                >
                                    {SEAT_TYPES.map((type, index) => (
                                        <MenuItem key={index} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="percentOff"
                                label="Percent off"
                                name="percentOff"
                                value={details.percentOff}
                                onChange={handleChange}
                                multiline
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

const Edit = ({ data }) => {
    const { closeModal } = useModal();
    const { details, handleChange, handleSubmit } = useForm({
        id: data.id,
        foodType: data.foodType,
        seatType: data.seatType,
        percentOff: data.percentOff,
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

                    <div className="flex flex-col">
                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="id"
                                label="ID"
                                name="id"
                                value={details.id}
                                disabled
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="pb-4">
                            <FormControl fullWidth>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    id="foodType"
                                    value={details.foodType}
                                    label="type"
                                    onChange={handleChange}
                                    name="foodType"
                                >
                                    {FOOD_TYPES.map((type, index) => (
                                        <MenuItem key={index} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="pb-4">
                            <FormControl fullWidth className="mb-4">
                                <InputLabel>Type</InputLabel>
                                <Select
                                    id="seatType"
                                    value={details.seatType}
                                    label="type"
                                    onChange={handleChange}
                                    name="seatType"
                                >
                                    {SEAT_TYPES.map((type, index) => (
                                        <MenuItem key={index} value={type}>
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="percentOff"
                                label="Percent off"
                                name="percentOff"
                                value={details.percentOff}
                                onChange={handleChange}
                                multiline
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
                        <span className="text-lg font-bold">Discount</span>
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
