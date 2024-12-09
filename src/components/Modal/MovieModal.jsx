import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { GENRES } from '~/store/constants';
import { useModal, useForm } from '~/hooks';
import * as movieService from '~/services/movieService';
import { TagButton } from '~/components/Button';
import { ImagePreview } from '~/components/Input';

const { post, put, del } = movieService;

const Create = ({ loading }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleImage, handleArray, handleSubmit } = useForm({
        id: '',
        name: '',
        poster: '',
        director: '',
        actors: '',
        author: '',
        description: '',
        dub: '',
        subTitle: '',
        duration: 0,
        genres: [],
    });

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex max-h-[560px] w-[920px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, post, true)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Create</span>
                    </div>

                    <div className="flex w-full flex-row">
                        <div className="basis-1/2">
                            <div className="w-full pb-4">
                                <TextField
                                    id="name"
                                    label="Name"
                                    name="name"
                                    value={details.name}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="director"
                                    label="Director"
                                    name="director"
                                    value={details.director}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="actors"
                                    label="Actors"
                                    name="actors"
                                    value={details.actors}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="author"
                                    label="Author"
                                    name="author"
                                    value={details.author}
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
                                    value={details.description}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                            <div className="flex w-full flex-row gap-2 pb-4">
                                <TextField
                                    id="dub"
                                    label="Dub"
                                    name="dub"
                                    value={details.dub}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />

                                <TextField
                                    id="subTitle"
                                    label="Subtitle"
                                    name="subTitle"
                                    value={details.subTitle}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />

                                <TextField
                                    id="duration"
                                    label="Duration"
                                    name="duration"
                                    type="number"
                                    value={details.duration}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <div className="mb-1 text-lg">Genres</div>

                                <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                    {GENRES.map((genre, index) => (
                                        <TagButton
                                            key={index}
                                            value={genre}
                                            onClick={handleArray}
                                            label={genre}
                                            id="genres"
                                            name="genres"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="basis-1/2">
                            <ImagePreview name="poster" onChange={handleImage} pathToStore="FilmPoster" />
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

const Edit = ({ data }) => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleImage, handleArray, handleSubmit } = useForm({
        id: data.id,
        name: data.name,
        director: data.director,
        actors: data.actors,
        author: data.author,
        description: data.description,
        dub: data.dub,
        poster: data.poster,
        subTitle: data.subTitle,
        duration: data.duration,
        genres: data.genres,
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
            <Box className="absolute left-[50%] top-[50%] flex max-h-[560px] w-[520px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-lg bg-base_bg">
                <form onSubmit={(e) => handleSubmit(e, put)} className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Edit</span>
                    </div>

                    <div className="w-full">
                        <div className="basis-1/2">
                            <div className="w-full pb-4">
                                <TextField
                                    id="name"
                                    label="Name"
                                    name="name"
                                    value={details.name}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="director"
                                    label="Director"
                                    name="director"
                                    value={details.director}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="actors"
                                    label="Actors"
                                    name="actors"
                                    value={details.actors}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="flex w-full flex-col justify-between pb-4">
                                <TextField
                                    id="author"
                                    label="Author"
                                    name="author"
                                    value={details.author}
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
                                    value={details.description}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>
                            <div className="flex w-full flex-row gap-2 pb-4">
                                <TextField
                                    id="dub"
                                    label="Dub"
                                    name="dub"
                                    value={details.dub}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />

                                <TextField
                                    id="subTitle"
                                    label="Subtitle"
                                    name="subTitle"
                                    value={details.subTitle}
                                    onChange={handleChange}
                                    multiline
                                    variant="filled"
                                    fullWidth
                                />

                                <TextField
                                    id="duration"
                                    label="Duration"
                                    name="duration"
                                    type="number"
                                    value={details.duration}
                                    onChange={handleChange}
                                    variant="filled"
                                    fullWidth
                                />
                            </div>

                            <div className="pb-4">
                                <div className="mb-1 text-lg">Genres</div>

                                <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                    {GENRES.map((genre, index) => (
                                        <TagButton
                                            key={index}
                                            value={genre}
                                            onClick={handleArray}
                                            label={genre}
                                            isToggle={data.genres?.includes(genre)}
                                            id="genres"
                                            name="genres"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="basis-1/2">
                            <ImagePreview name="poster" onChange={handleImage} pathToStore="FilmPoster" />
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
                        <span className="text-lg font-bold">Genres</span>
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
