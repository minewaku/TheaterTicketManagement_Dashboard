// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';

const get = async (params, data) => {
    try {
        const response = await httpRequest.get('reservation/api/Food/getAll', params, data);
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('reservation/api/Food', {}, data);
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
        const response = await httpRequest.put(`reservation/api/Food/${data.id}`, {}, data);
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
        const response = await httpRequest.del('reservation/api/Food', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, post, put, del };
