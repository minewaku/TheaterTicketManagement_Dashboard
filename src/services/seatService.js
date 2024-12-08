// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';

const getByRoom = async (id, params = {}, data = {}) => {
    try {
        const response = await httpRequest.get(`reservation/api/Seat/room/${id}`, params, data);
        console.log(JSON.stringify(response, null, 2));
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const postList = async (data) => {
    try {
        const response = await httpRequest.post('reservation/api/Seat/addList', {}, data);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

const putList = async (data) => {
    try {
        const response = await httpRequest.put('reservation/api/Seat/updateList', {}, data);
        console.log(JSON.stringify(response, null, 2));
        alert('Seat updated successfully');
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
        const response = await httpRequest.del('reservation/api/Seat', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { getByRoom, postList, putList, del };
