// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';

const get = async (params, data) => {
    try {
        const response = await httpRequest.get('reservation/api/Discount/getAll', params, data);
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('reservation/api/Discount', {}, data);
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
        const response = await httpRequest.put(`reservation/api/Discount/${data.id}`, {}, data);
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
        const response = await httpRequest.del('reservation/api/Discount', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, post, put, del };
