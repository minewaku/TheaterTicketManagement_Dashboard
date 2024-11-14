import axios from 'axios'
import { useParams } from 'react-router-dom';

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

httpRequest.interceptors.request.use(request => {
    const fullUrl = `${request.baseURL || ''}${request.url}?${new URLSearchParams(request.params).toString()}`;
    console.log('Request Full URL with Params:', fullUrl);
    console.log('params:', request.params);
    console.log('data:', request.data);
    return request;
}
    // function (error) {
    //     return Promise.reject(error)
    // },
)

httpRequest.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
});

// httpRequest.interceptors.response.use(
//     function (response) {
//         return response.data || { statusCode: response.status };
//     },
//     function (error) {
//         if (error.response) {
//             alert(`Error ${error.response.status}: ${error.response.data}`);
//             return Promise.reject(error);
//         } else if (error.request) {
//             alert("Network error: No response received.");
//         } else {
//             alert(`Request setup error: ${error.message}`);
//         }
//         return Promise.reject(error);
//     }
// );

const cleanParams = (params) => {
    return Object.fromEntries(
        Object.entries(params).filter(([key, value]) => {
            if (value === null || value == "") return false;
            if (Array.isArray(value) && value.length === 0) return false;
            if (typeof value === 'object' && Object.keys(value).length === 0) return false;
            return true;
        })
    );
};

const joinParams = (arr) => {
    console.log("Details from joinParams: ", arr)
    return arr.join(',');
};

const flattenParams = (obj, prefix = '', result = {}) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  }

const get = async (path, params) => {
    const cleanedParams = cleanParams({...params, _sort: joinParams(params._sort)});
    const flattenedParams = flattenParams(cleanedParams);
    const response = await httpRequest.get(path, { params: flattenedParams });
    return response;
}

const post = async (path, params) => {
    const response = await httpRequest.post(path, params);
    return response;
}

const put = async (path, params) => {
    console.log('params:', params);
    const response = await httpRequest.put(path, params);
    return response;
}

const del = async (path, ids = []) => {
    const response = await httpRequest.delete(`${path}/${joinParams(ids)}`);
    return response;
}

export { get, post, put, del }
export default httpRequest