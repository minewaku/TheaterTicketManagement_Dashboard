import { DataTable } from '~/components/Table';
import { TABLE_HEADERS } from '~/store/constants';
import { TicketModal } from '~/components/Modal';
import { SIZE_OPTIONS_1 } from '~/store/constants';
import * as ticketService from '~/services/ticketService';

const Tickets = () => {
    return (
        <DataTable
            label="Ticket"
            headers={TABLE_HEADERS.TICKETS}
            modals={TicketModal}
            sizeOptions={SIZE_OPTIONS_1}
            apiServices={ticketService}
        ></DataTable>
    );
};

export default Tickets;

// {
//     "totalRecords": 1,
//     "records": [
//         {
//             "id": "67545613624b9fc2cd8ec2ee",
//             "movieScheduleId": "67457f2eff7a0953655978f7",
//             "seatId": [
//                 "67457fd5da2c3e752f04c815"
//             ],
//             "seatDetail": [
//                 {
//                     "id": "67457fd5da2c3e752f04c815",
//                     "roomNumber": "02",
//                     "row": "A",
//                     "column": "3",
//                     "seatType": "single"
//                 }
//             ],
//             "foodId": [
//                 "6743f2b4381e099898c8d3a7"
//             ],
//             "foodDetail": [
//                 {
//                     "id": "6743f2b4381e099898c8d3a7",
//                     "name": "Pepsi",
//                     "foodType": "M",
//                     "description": "Nước ngọt",
//                     "amount": 300,
//                     "image": null
//                 }
//             ],
//             "baseAmount": 55300,
//             "totalAmount": 55300,
//             "discountId": null,
//             "discountDetail": null,
//             "userId": "6735c1bfbd264edbe30ddebd",
//             "status": "pending",
//             "createdAt": "2024-12-07T21:05:07.355",
//             "expiryTime": "2024-12-07T21:35:07.389"
//         }
//     ],
//     "limit": 100,
//     "page": 1
// }
