// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';
import { store } from '~/store/reducers/store';
import { toast } from 'react-toastify';

const login = async (data) => {
    try {
        const response = await httpRequest.post('auth/api/Login', {}, data);
        console.log('Response dataa: ', response.data);
        if (response.data || response.headers['authorization']) {
            store.dispatch({
                type: 'LOGIN',
                payload: { account: { token: response.data.accessToken }, isAuthenicated: false },
            });

            const user = await httpRequest.get('auth/api/Verify');
            console.log('User data: ', user);
            if(!user.data.roles.includes('ADMIN')) {
                store.dispatch({
                    type: 'LOGOUT',
                    payload: { account: { token: null }, isAuthenicated: false },
                });
                toast.warning('You are not authorized to access this page');
            } else {
                store.dispatch({
                    type: 'LOGIN',
                    payload: { account: { token: response.data.accessToken, username: user.data.username, role: user.data.roles }, isAuthenicated: true },
                });
                toast.success('Login successfully!');
            }

        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error('Invalid username or password');
        } else {
            toast.error('An error occurred. Please try again later');
        }

        return Promise.reject(error);
    }
};

export { login };
