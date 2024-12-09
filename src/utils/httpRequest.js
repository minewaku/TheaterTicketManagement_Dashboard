import axios from 'axios';
import { store } from '~/store/reducers/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

httpRequest.interceptors.request.use(
    (request) => {
        const token = store.getState().auth.account.token;
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        request.headers['Content-Type'] = 'application/json';

        console.log('Request: ', JSON.stringify(request, null, 2));
        alert('Request: ', JSON.stringify(request, null, 2));
        return request;
    },

    (error) => {
        console.log('Error in Request: ', JSON.stringify(error, null, 2));
        alert('Error in Request: ', JSON.stringify(error, null, 2));
        // toast.error('Error in Request: ', JSON.stringify(error, null, 2));
        return Promise.reject(error);
    }
);

httpRequest.interceptors.response.use(
    (response) => {
        console.log('Response: ', JSON.stringify(response, null, 2));
        alert('Response: ', JSON.stringify(response, null, 2));
        return response;
    },

    (error) => {
        console.log('Error in Response: ', JSON.stringify(error, null, 2));
        if (error.response && error.response.status === 401) {
            store.dispatch({ type: 'LOGOUT', payload: { account: { token: null }, isAuthenicated: false } });
            // window.location.href = '/login';
        }

        const errorMessage = error.response?.data?.message || error.message || 'An unknown error occurred';
        alert(errorMessage);
        // toast.error(errorMessage, {autoClose: 5000});
        return Promise.reject(error);
    }
);

const cleanParams = (params) => {
    if (!params.sort || params.sort.length === 0) {
        delete params.sort;
        delete params.order;
    }

    return Object.fromEntries(
        Object.entries(params).filter(([key, value]) => {
            if (value === null || value == '') return false;
            if (Array.isArray(value) && value.length === 0) return false;
            if (typeof value === 'object' && Object.keys(value).length === 0) return false;
            return true;
        })
    );
};

const joinParams = (arr) => {
    return arr.join(',');
};

// const flattenParams = (obj, prefix = '', result = {}) => {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 flattenParams(obj[key], newKey, result); // Corrected the recursive call
//             } else {
//                 result[newKey] = obj[key];
//             }
//         }
//     }
//     return result;
// };

const flattenParams = (obj, prefix = '', result = {}) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // If prefix is empty, don't include it in the new key
                flattenParams(obj[key], prefix === '' ? '' : newKey, result);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
};

const cleanedCriteria = (obj) => {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value && typeof value === 'object') {
                // Recursively clean nested objects
                const cleanedValue = cleanedCriteria(value);
                if (Object.keys(cleanedValue).length > 0) {
                    result[key] = cleanedValue;
                }
            } else if (value !== null && value !== '') {
                // Add to result if value is not null or empty
                result[key] = value;
            }
        }
    }
    return result;
};

const get = async (path, params = {}, data = {}) => {
    console.log('Params: ', params);
    const cleanedParams = cleanParams({ ...params, criteria: cleanedCriteria(params.criteria), sort: params.sort ? joinParams(params.sort) : undefined });
    console.log('Cleaned Params: ', cleanedParams);
    const flattenedParams = flattenParams(cleanedParams);
    console.log('Flattened Params: ', flattenedParams);
    const response = await httpRequest.get(path, { params: flattenedParams });
    return response;
};

const post = async (path, params, data) => {
    const response = await httpRequest.post(path, data, params);
    return response;
};

const put = async (path, params, data) => {
    const response = await httpRequest.put(path, data, params);
    return response;
};

const del = async (path, ids = []) => {
    const response = await httpRequest.delete(`${path}/${joinParams(ids)}`);
    return response;
};

export { get, post, put, del };
export default httpRequest;
