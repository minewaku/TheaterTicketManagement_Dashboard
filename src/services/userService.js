// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';
import { toast } from 'react-toastify';

const get = async (params, data) => {
    try {
        const response = await httpRequest.get('auth/api/User/getAll', params, data);
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const getById = async (id) => {
    try {
        const response = await httpRequest.get(`auth/api/User/${id}`, {}, {});
        console.log("User by id: ", response);
        if (response.status === 200) {
            // window.location.reload();
        }
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('auth/api/User', {}, data);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const put = async (data) => {
    try {
        const response = await httpRequest.put(`auth/api/User/${data.id}`, {}, data);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const del = async (ids = []) => {
    try {
        const response = await httpRequest.del('auth/api/User', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, getById, post, put, del };
