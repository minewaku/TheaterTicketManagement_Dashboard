// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';

const get = async (params = {}, data = {}) => {
    try {
        const response = await httpRequest.get('movies/api/MovieSchedule', params, data);
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('movies/api/MovieSchedule', {}, data);
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
        const response = await httpRequest.put(`movies/api/MovieSchedule/${data.id}`, {}, data);
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
        const response = await httpRequest.del('movies/api/MovieSchedule', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, post, put, del };
