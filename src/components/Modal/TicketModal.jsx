import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useModal } from '~/hooks';
import * as userService from '~/services/userService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Inspect = ({ data }) => {
    const { closeModal } = useModal();
    const [username, setUsername] = useState('');

    // Fetch user data when the modal is rendered
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await userService.getById(data.userId);
                setUsername(user.username);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [data.userId]);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={true}
            onClose={closeModal}
            closeAfterTransition
        >
            <Box className="absolute left-[50%] top-[50%] flex max-h-[580px] min-w-[920px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-lg bg-base_bg">
                <form className="flex w-full flex-col p-4">
                    <div className="pb-3 pt-2">
                        <span className="text-xl font-bold">Ticket</span>
                    </div>

                    <div className="flex w-full gap-x-2">
                        <div className="flex flex-1 flex-col">
                            <div className="text-base">
                                <span className="me-2 font-bold">Id: </span>
                                <span>{data.id}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Movie scheduleId: </span>
                                <span>{data.movieScheduleId}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Username: </span>
                                <span>{username}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Amount </span>
                                <span>{data.baseAmount}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Percent off </span>
                                <span>{data.discountDetail.percentOff}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Total </span>
                                <span>{data.totalAmount}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Status </span>
                                <span>{data.status}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Created at</span>
                                <span>{data.createdAt}</span>
                            </div>
                            <div className="text-base">
                                <span className="me-2 font-bold">Expiry time</span>
                                <span>{data.expiryTime}</span>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col">
                            <div className="pb-4">
                                <List component="div" className="min-h-[280px] overflow-y-scroll bg-secondary_bg">
                                    {data.seatDetail.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            className="flex flex-col text-base font-semibold shadow-[0px_2px_0px_rgba(1,1,1,0.2)]"
                                        >
                                            <div className="">
                                                {'Phòng: ' + item.roomNumber + ' | Ghế: ' + item.row + item.column}
                                            </div>
                                            <div className="">{item.seatType}</div>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col">
                            <div className="pb-4">
                                <List component="div" className="min-h-[280px] overflow-y-scroll bg-secondary_bg">
                                    {data.foodDetail.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            className="flex flex-col text-base font-semibold shadow-[0px_2px_0px_rgba(1,1,1,0.2)]"
                                        >
                                            <div className="">
                                                {'Tên: ' +
                                                    item.name +
                                                    ' | Loại: ' +
                                                    item.foodType +
                                                    ' | Giá: ' +
                                                    item.amount}
                                            </div>
                                            <div className="">{'Ghi chú: ' + item.description}</div>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-4 pt-10">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="rounded-md bg-primary px-7 py-1 text-lg text-base_bg hover:opacity-80"
                        >
                            Exist
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default { Inspect };
