import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useModal, useForm } from '~/hooks';
import * as seatService from '~/services/seatService';

const { postList, putList, del } = seatService;

const Create = ({ data }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleSubmit } = useForm(data);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={() => closeModal()}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, postList)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-lg font-bold">Seat</span>
                    </div>

                    <span className="text-center text-lg font-bold">Are you sure you want to create {data.length} new seats?</span>

                    <div className="flex items-center justify-center pt-10">
                        <button className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80">
                            OK
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

const Edit = ({ data }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleSubmit } = useForm([data]);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={() => closeModal()}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, putList)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-lg font-bold">Seat</span>
                    </div>

                    <span className="text-center text-lg font-bold">Are you sure you want to update {data.id}?</span>

                    <div className="flex items-center justify-center pt-10">
                        <button className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80">
                            OK
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
                        <span className="text-lg font-bold">Seat</span>
                    </div>

                    <span className="text-center text-lg font-bold">
                        Are you sure you want to delete {ids.join(', ')}?
                    </span>

                    <div className="flex items-center justify-center pt-10">
                        <button className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80">
                            OK
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default { Create, Edit, Delete };
