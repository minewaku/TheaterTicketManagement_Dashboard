import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import * as statisticService from '~/services/statisticService';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { BarChart } from '@mui/x-charts/BarChart';
import _ from 'lodash';

const barChartsParams = {
    series: [
        {
            id: 'series-1',
            data: [10, 4, 1, 6, 5],
            label: 'A',
        },
        {
            id: 'series-2',
            data: [4, 3, 1, 5, 8],
            label: 'B',
        },
        {
            id: 'series-3',
            data: [4, 2, 5, 4, 1],
            label: 'C',
        },
    ],
};

const sampleData = [
    {
        id: '675574222870b22266d8f1bd',
        userId: '6735c1bfbd264edbe30ddebd',
        ticketId: '675570500a1302a923b24c18',
        paymentId: '14729141',
        movieDetail: {
            id: '673f3e3ca83bd7136617629d',
            name: 'Bochi The Rock',
            director: 'Bochi',
            actors: 'Bochi',
            author: 'Bochi',
            description: 'The guitar hero!',
            dub: 'Tiếng Việt',
            subTitle: 'Tiếng Việt',
        },
        paymentMethod: 'VnPay',
        showTime: '2024-11-30T01:20:00',
        seatDetail: [
            {
                id: '67457fd5da2c3e752f04c815',
                roomNumber: '02',
                row: 'A',
                column: '3',
                seatType: 'single',
            },
        ],
        ticketCreatedDate: '2024-12-08T17:09:20.009',
    },
    {
        id: '6755a7bd71682e3fc8dbb13d',
        userId: '673deb262558761a6109d568',
        ticketId: '6755a759fb03361b9d05e7dc',
        paymentId: '14729582',
        movieDetail: {
            id: '6743f62d5e27e6508b7b44c6',
            name: 'Goblin Slayer',
            director: 'Oblords',
            actors: 'Goblin Slayer',
            author: 'Unknown',
            description: 'Goblin Slayer and his adventure about killing goblin ',
            dub: 'Tiếng Nhật',
            subTitle: 'Tiếng Nhật',
        },
        paymentMethod: 'VnPay',
        showTime: '2024-12-11T17:50:07',
        seatDetail: [
            {
                id: '67557b14fb03361b9d05e7c5',
                roomNumber: '01',
                row: 'B',
                column: '3',
                seatType: 'single',
            },
        ],
        ticketCreatedDate: '2024-12-08T21:04:09.006',
    },
];

const Dashboard = () => {
    // const [startDate, setStartDate] = React.useState(dayjs());
    // const [endDate, setEndDate] = React.useState(dayjs().add(4, 'days')); // Ensure there is a valid range initially
    // const [dateRange, setDateRange] = React.useState([]);
    // const [data, setData] = React.useState([]);
    // const [chartParams, setChartParams] = React.useState(barChartsParams);

    // const generateDateRange = (start, end) => {
    //     const startDate = dayjs(start);
    //     const endDate = dayjs(end);

    //     if (!startDate.isValid() || !endDate.isValid() || startDate.isAfter(endDate)) {
    //         console.error('Invalid date range');
    //         return [];
    //     }

    //     const range = [];
    //     let currentDate = startDate;

    //     while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
    //         range.push(currentDate.format('D/M')); // Format "date/month"
    //         currentDate = currentDate.add(1, 'day');
    //     }

    //     console.log('Date range:', range);
    //     return range;
    // };

    // const generateChartData = (data) => {
    //     data?.map((item) => {

    //     });
    // }

    // useEffect(() => {
    //     setData(statisticService.get());
    //     setDateRange(generateDateRange(startDate, endDate));
    // }, [startDate, endDate]);

    // return (
    //     <div
    //         className="flex h-auto w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-4"
    //         style={{ maxWidth: '1200px', overflow: 'hidden' }}
    //     >
    //         {/* Chart Wrapper */}
    //         <Stack
    //             direction={{ xs: 'column', md: 'row' }}
    //             spacing={{ xs: 2, md: 4 }}
    //             sx={{
    //                 width: '100%',
    //                 height: 'auto',
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //                 overflow: 'hidden',
    //             }}
    //         >
    //             <Box
    //                 sx={{
    //                     flexGrow: 1,
    //                     maxWidth: '100%',
    //                     display: 'flex',
    //                     height: '800px',
    //                     justifyContent: 'center',
    //                     overflow: 'hidden',
    //                 }}
    //             >
    //                 <BarChart
    //                     {...barChartsParams}
    //                     // series={[]}
    //                     xAxis={[{ data: dateRange, scaleType: 'band', id: 'axis1' }]}
    //                     onItemClick={(event, d) => console.log(d)}
    //                     onAxisClick={(event, d) => console.log(d)}
    //                 />
    //             </Box>
    //         </Stack>

    //         {/* DateTimePicker Wrapper */}
    //         <div
    //             className="flex w-full max-w-xl items-center justify-center gap-4 rounded-md bg-white p-4"
    //             style={{ overflow: 'hidden' }}
    //         >
    //             <div>
    //                 <LocalizationProvider dateAdapter={AdapterDayjs}>
    //                     <DemoContainer components={['DateTimePicker']}>
    //                         <DateTimeField
    //                             name="startDate"
    //                             label="Start date"
    //                             value={startDate}
    //                             onChange={(value) => setStartDate(value)}
    //                         />
    //                     </DemoContainer>
    //                 </LocalizationProvider>
    //             </div>

    //             <div>
    //                 <LocalizationProvider dateAdapter={AdapterDayjs}>
    //                     <DemoContainer components={['DateTimePicker']}>
    //                         <DateTimeField
    //                             name="endDate"
    //                             label="End date"
    //                             value={endDate}
    //                             onChange={(value) => setEndDate(value)}
    //                         />
    //                     </DemoContainer>
    //                 </LocalizationProvider>
    //             </div>
    //         </div>
    //     </div>
    // );

    // State for date range
    const [startDate, setStartDate] = useState(dayjs().startOf('week').add(1, 'day'));
    const [endDate, setEndDate] = useState(dayjs().endOf('week').add(1, 'day'));
    const [data, setData] = useState([]);
    const [dateRange, setDateRange] = useState([]);

    const generateDateRange = () => {
        const dates = [];
        let current = dayjs(startDate);
        const end = dayjs(endDate);

        while (current.isBefore(end) || current.isSame(end, 'day')) {
            dates.push(current.format('D/M'));
            current = current.add(1, 'day');
        }

        return dates;
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await statisticService.get();
            setData(data);
            setDateRange(generateDateRange(startDate, endDate));
        };

        fetchData();
    }, [startDate, endDate]);

    // Filter and count seat views
    const processedData = () => {
        const filteredData = data.filter((ticket) =>
            dayjs(ticket.ticketCreatedDate).isBetween(startDate, endDate, null, '[]')
        );

        const groupedData = _(filteredData)
            .groupBy((ticket) => dayjs(ticket.ticketCreatedDate).format('D/M'))
            .mapValues((group) => _.countBy(group, 'movieDetail.name'))
            .value();

        const dateRange = generateDateRange(startDate, endDate);

        return dateRange.map((date) => ({
            date,
            movieCounts: groupedData[date] || {},
        }));
    };

    const chartData = processedData();
    const uniqueMovies = _.uniq(data.map((ticket) => ticket.movieDetail.name));

    const series = uniqueMovies.map((movieName) => ({
        data: chartData.map((item) => item.movieCounts[movieName] || 0),
        label: movieName,
    }));

    return (
        <div
            className="flex h-auto w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-4"
            style={{ maxWidth: '1200px', overflow: 'hidden' }}
        >
            {/* Chart Wrapper */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2, md: 4 }}
                sx={{
                    width: '100%',
                    height: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        maxWidth: '100%',
                        display: 'flex',
                        height: '600px',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <BarChart
                        xAxis={[
                            {
                                id: 'date',
                                data: dateRange,
                                scaleType: 'band',
                            },
                        ]}
                        series={series}
                    />
                </Box>
            </Stack>

            {/* DateTimePicker Wrapper */}
            <div
                className="flex w-full max-w-xl items-center justify-center gap-4 rounded-md bg-white p-4"
                style={{ overflow: 'hidden' }}
            >
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimeField
                                name="startDate"
                                label="Start date"
                                value={startDate}
                                onChange={(value) => setStartDate(value)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimeField
                                name="endDate"
                                label="End date"
                                value={endDate}
                                onChange={(value) => setEndDate(value)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
