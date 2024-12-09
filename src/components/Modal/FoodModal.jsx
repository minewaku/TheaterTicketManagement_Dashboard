import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FOOD_TYPES } from '../../store/constants';
import { ImagePreview } from '~/components/Input';
import { useModal, useForm } from '~/hooks';
import * as foodService from '~/services/foodService';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

const { post, put, del } = foodService;

const Create = () => {
    const { closeModal } = useModal();
    const { details, handleChange, handleImage, handleSubmit } = useForm({
        name: '',
        foodType: '',
        desciption: '',
        image: '',
        amount: 0,
    });

    useEffect(() => {
        details.image.replace('C:\\fakepath\\', 'src/assets/Food/');
    }, [details]);

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

                    <div className="flex w-full">
                        <div className="w-1/2 pe-2">
                            <div className="w-full pb-4">
                                <TextField
                                    id="name"
                                    label="Name"
                                    name="name"
                                    type="text"
                                    value={details.name}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

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

                            <div className="flex w-full flex-col justify-between py-4">
                                <TextField
                                    id="amount"
                                    label="Amount"
                                    name="amount"
                                    type="number"
                                    value={details.amount}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="description"
                                    label="Description"
                                    name="description"
                                    type="text"
                                    value={details.description}
                                    onChange={handleChange}
                                    rows={4}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                        </div>

                        <div className="w-1/2 ps-2">
                            <ImagePreview name="image" onChange={handleImage} pathToStore="Food" />
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
    const { details, handleChange, handleImage, handleSubmit } = useForm({
        id: data.id,
        name: data.name,
        foodType: data.foodType,
        desciption: data.desciption,
        image: data.image,
        amount: data.amount,
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

                    <div className="flex w-full">
                        <div className="w-1/2 pe-2">
                            <div className="w-full pb-4">
                                <TextField
                                    id="id"
                                    label="Id"
                                    name="id"
                                    type="text"
                                    disabled
                                    value={details.id}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="w-full pb-4">
                                <TextField
                                    id="name"
                                    label="Name"
                                    name="name"
                                    type="text"
                                    value={details.name}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

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

                            <div className="flex w-full flex-col justify-between py-4">
                                <TextField
                                    id="amount"
                                    label="Amount"
                                    name="amount"
                                    type="number"
                                    value={details.amount}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="description"
                                    label="Description"
                                    name="description"
                                    type="text"
                                    value={details.description}
                                    onChange={handleChange}
                                    rows={4}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                        </div>

                        <div className="w-1/2 ps-2">
                            <ImagePreview name="image" onChange={handleImage} pathToStore="Food" />
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
                        <span className="text-lg font-bold">Food</span>
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
