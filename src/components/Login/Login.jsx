import { FaDashcube } from 'react-icons/fa6';
import { TextField, Paper } from '@mui/material';
import { useForm } from '~/hooks';
import { login } from '~/services';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { details, setDetails, handleChange, handleSubmit } = useForm({ username: '', password: '' });
    // const { details, setDetails, response, setResponse, handleChange, handleSubmit } = useForm({ username: '', password: '' });

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
                            Hi! Welcome back!
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

                                <div className="w-full">
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
                            </div>

                            <div className="text-md mb-8 mt-5 flex justify-between">
                                <label className="flex align-middle hover:cursor-pointer">
                                    <input type="checkbox" className="me-2 scale-125" />
                                    <span>Keep me logged in?</span>
                                </label>
                                <Link className="font-medium text-primary">Forgot password?</Link>
                            </div>

                            {/* {response?.status === 401 ?
                            <div className="my-3 text-start">Verify your username and password</div> : null
                        } */}

                            <div className="mb-2 flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="text-md w-full rounded-md bg-primary py-3 font-bold text-base_bg"
                                >
                                    Sign in
                                </button>
                            </div>

                            <Link to="/register" className="my-4 text-center font-medium text-txt">
                                Don't have an account?
                            </Link>
                        </form>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Login;
