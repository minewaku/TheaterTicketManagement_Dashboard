// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';
import { toast } from 'react-toastify';

const get = async (params, data) => {
    try {
        const response = await httpRequest.get('admin/api/MovieSale', params, data);
        return response.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get };
