// Using on JsonHolder API for testing, can delete later
import * as httpRequest from '~/utils/httpRequest';
import * as movieService from '~/services/movieService';
import * as userService from '~/services/userService';

// const get = async (params, data) => {
//     try {
//         const tickets = await httpRequest.get('reservation/api/Ticket/getAll', params, data);
//         return tickets.data;
//     } catch (error) {
//         toast.error('An error occurred. Please try again later');
//     }
// };

const get = async (params, data) => {
    try {
        const ticketsResponse = await httpRequest.get('reservation/api/Ticket/getAll', params, data);
        const tickets = ticketsResponse?.data.records;

        const processedTickets = tickets.map((ticket) => ({
            ...ticket,
            foodQnt: Array.isArray(ticket.foodDetail) ? ticket.foodDetail.length : 0,
            seatQnt: Array.isArray(ticket.seatDetail) ? ticket.seatDetail.length : 0,
        }));

        console.log('Processed Tickets:', processedTickets);
        ticketsResponse.data.records = processedTickets;

        return ticketsResponse.data;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
        return [];
    }
};

const post = async (data) => {
    try {
        const response = await httpRequest.post('reservation/api/Ticket', {}, data);
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
        const response = await httpRequest.put(`reservation/api/Ticket/${data.id}`, {}, data);
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
        const response = await httpRequest.del('reservation/api/Ticket', ids);
        if (response.status === 200) {
            window.location.reload();
        }
        return response;
    } catch (error) {
        toast.error('An error occurred. Please try again later');
    }
};

export { get, post, put, del };

// {
//     "id": "67541f386b358b5413a29732",
//     "movieScheduleId": "67457f2eff7a0953655978f7",
//     "seatId": [
//         "67457fd5da2c3e752f04c815"
//     ],
//     "seatDetail": [
//         {
//             "id": "67457fd5da2c3e752f04c815",
//             "roomNumber": "02",
//             "row": "A",
//             "column": "3",
//             "seatType": "single"
//         }
//     ],
//     "foodId": [
//         "6743f2b4381e099898c8d3a7"
//     ],
//     "foodDetail": [
//         {
//             "id": "6743f2b4381e099898c8d3a7",
//             "name": "Pepsi",
//             "foodType": "M",
//             "description": "Nước ngọt",
//             "amount": 300,
//             "image": null
//         }
//     ],
//     "baseAmount": 55300,
//     "totalAmount": 55300,
//     "discountId": null,
//     "discountDetail": null,
//     "userId": "6735c1bfbd264edbe30ddebd",
//     "status": "pending",
//     "createdAt": "2024-12-07T17:11:04.361",
//     "expiryTime": "2024-12-07T17:41:04.361"
// }
