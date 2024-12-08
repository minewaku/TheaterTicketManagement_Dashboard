// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';
import { toast } from 'react-toastify';

const get = async (params = {}, data = {}) => {
    try {
        const response = await httpRequest.get('movies/api/Movie', params, data);
        console.log(JSON.stringify(response, null, 2));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('movies/api/Movie', {}, data);
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
        const response = await httpRequest.put(`movies/api/Movie/${data.id}`, {}, data);
        console.log(JSON.stringify(response, null, 2));

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
        const response = await httpRequest.del('movies/api/Movie', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, post, put, del };
