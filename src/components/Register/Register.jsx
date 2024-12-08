import { FaDashcube } from 'react-icons/fa6';
import { TextField, Paper } from '@mui/material';
import { useForm } from '~/hooks';
import { login } from '~/services';
import { Link } from 'react-router-dom';

const Register = () => {
    const { details, setDetails, handleChange, handleSubmit } = useForm({ username: '', password: '' });

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-secondary_bg">
            <Paper className="rounded-md bg-white text-txt" elevation={1}>
                <div className="mx-3">
                    <div className="">
                        <div className="my-8 mb-8 flex flex-row items-center justify-center text-xl">
                            <FaDashcube className="text-secondary" />
                            <span className="ms-2 font-bold text-txt">ADMIN</span>
                        </div>

                        <div className="mb-2 items-center text-center text-2xl font-bold text-primary">
                            Hello! Nice to meet you!
                        </div>
                    </div>

                    <div className="">
                        <form onSubmit={(e) => handleSubmit(e, login)} className="flex w-full flex-col p-4">
                            <div className="flex w-[420px] flex-col justify-between shadow-sm">
                                <div className="w-full pb-4">
                                    <TextField
                                        className="bg-search_bg"
                                        id="username"
                                        label="Username"
                                        name="username"
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </div>

                                <div className="w-full pb-4">
                                    <TextField
                                        className="bg-search_bg"
                                        id="email"
                                        label="Email"
                                        name="email"
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </div>
 
                                <div className="w-full pb-4">
                                    <TextField
                                        className="bg-search_bg"
                                        type="password"
                                        id="password"
                                        label="Password"
                                        name="password"
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </div>

                                <div className="w-full">
                                    <TextField
                                        className="bg-search_bg"
                                        type="password"
                                        id="confirm_password"
                                        label="Confirm password"
                                        name="confirm_password"
                                        fullWidth
                                    />
                                </div>
                            </div>

                            <div className="text-md mb-8 mt-5 flex justify-between">
                                <label className="flex align-middle hover:cursor-pointer">
                                    <input type="checkbox" className="me-2 scale-125" />
                                    <span>
                                        <span>Argee with </span>
                                        <Link className='underline font-bold text-txt'>Terms and condition</Link>
                                    </span>
                                </label>
                                {/* <Link className="font-medium text-primary">Forgot password?</Link> */}
                            </div>

                            <div className="flex items-center justify-center mb-2">
                                <button
                                    type="submit"
                                    className="text-md w-full rounded-md bg-primary py-3 font-bold text-base_bg"
                                >
                                    Sign up
                                </button>
                            </div>

                            <Link to="/login" className="text-center my-4 font-medium text-txt">Already have an account?</Link>
                        </form>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Register;
