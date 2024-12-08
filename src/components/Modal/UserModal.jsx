import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ROLES, DEPARTMENTS } from '~/store/constants';
import { useModal, useForm } from '~/hooks';
import * as userService from '~/services/userService';
import { TagButton } from '~/components/Button';

const { post, put, del } = userService;

const Create = () => {
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleArray, handleSubmit } = useForm({
        username: '',
        password: '12345',
        email: '',
        roles: [],
        departments: [],
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
                        <div className="w-full pb-4">
                            <TextField
                                id="username"
                                label="Username"
                                name="username"
                                value={details.username}
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="password"
                                label="Password"
                                name="password"
                                value={details.password}
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="pb-4">
                            <div className="mb-1 text-lg">Roles</div>

                            <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                {ROLES.map((role, index) => (
                                    <TagButton
                                        key={index}
                                        value={role}
                                        label={role}
                                        onClick={handleArray}
                                        id="roles"
                                        name="roles"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pb-4">
                            <div className="mb-1 text-lg">Departments</div>

                            <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                {DEPARTMENTS.map((department, index) => (
                                    <TagButton
                                        key={index}
                                        value={department}
                                        label={department}
                                        onClick={handleArray}
                                        id="departments"
                                        name="departments"
                                    />
                                ))}
                            </div>
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
    const { modal, closeModal, openModal } = useModal();
    const { details, setDetails, handleChange, handleArray, handleSubmit } = useForm({
        id: data.id,
        username: data.username,
        password: data.password,
        email: data.email,
        roles: data.roles,
        departments: data.departments,
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
                        <div className="w-full pb-4">
                            <TextField
                                id="id"
                                label="Id"
                                name="id"
                                value={data.id}
                                onChange={handleChange}
                                multiline
                                disabled
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="w-full pb-4">
                            <TextField
                                id="username"
                                label="Username"
                                name="username"
                                value={data.username}
                                onChange={handleChange}
                                multiline
                                disabled
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="flex w-full flex-col justify-between pb-4">
                            <TextField
                                id="password"
                                label="Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                multiline
                                variant="filled"
                                fullWidth
                            />
                        </div>

                        <div className="pb-4">
                            <div className="mb-1 text-lg">Roles</div>

                            <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                {ROLES.map((role, index) => (
                                    <TagButton
                                        key={index}
                                        value={role}
                                        onClick={handleArray}
                                        label={role}
                                        isToggle={data.roles.includes(role)}
                                        id="roles"
                                        name="roles"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pb-4">
                            <div className="mb-1 text-lg">Departments</div>

                            <div className="flex w-full flex-wrap gap-2 rounded-md bg-secondary_bg p-4">
                                {DEPARTMENTS.map((department, index) => (
                                    <TagButton
                                        key={index}
                                        value={department}
                                        tag={department}
                                        onClick={handleArray}
                                        label={department}
                                        isToggle={data.departments.includes(department)}
                                        id="departments"
                                        name="departments"
                                    />
                                ))}
                            </div>
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
