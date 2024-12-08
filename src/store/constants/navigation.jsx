import { HiOutlineViewGrid, HiOutlineQuestionMarkCircle, HiOutlineCog } from 'react-icons/hi';
import {
    NotificationPopover,
    ReportPopover,
    ThemePopover,
    LanguagePopover,
} from '~/layouts/components/Header/HeaderPopover';
import { GoGear } from 'react-icons/go';
import { RiUser3Line } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { MdMeetingRoom } from 'react-icons/md';
import { MdOutlineFastfood } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import { HiOutlineTicket } from 'react-icons/hi';
import { GrSchedules } from 'react-icons/gr';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { MdOutlineChair } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

export const HEADER_ITEMS = [LanguagePopover, NotificationPopover, ThemePopover, ReportPopover];

export const HEADER_MENU_ITEMS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <GoGear />,
    },
    {
        key: 'profile',
        label: 'Profile',
        path: '/profile',
        icon: <RiUser3Line />,
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <IoIosLogOut />,
    },
];

export const SIDEBAR_ITEMS = [
    {
        group: 'Dashboard',
        children: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                path: '/',
                icon: <HiOutlineViewGrid />,
            },
            {
                key: 'users',
                label: 'Users',
                path: '/users',
                icon: <FaCircleUser />,
            },
            {
                key: 'rooms',
                label: 'Rooms',
                path: '/rooms',
                icon: <MdMeetingRoom />,
            },
            {
                key: 'movies',
                label: 'Movies',
                path: '/movies',
                icon: <RiMovie2Line />,
            },
            {
                key: 'schedule',
                label: 'Schedule',
                path: '/schedule',
                icon: <GrSchedules />,
        },
            {
                key: 'seats',
                label: 'Seats',
                path: '/seats',
                icon: <MdOutlineChair />,
            },
            {
                key: 'tickets',
                label: 'Tickets',
                path: '/tickets',
                icon: <HiOutlineTicket />,
            },
            {
                key: 'food',
                label: 'Food',
                path: '/food',
                icon: <MdOutlineFastfood />,
            },
            {
                key: 'discount',
                label: 'Discount',
                path: '/discount',
                icon: <RiDiscountPercentLine />
            }
        ],
    },
    {
        group: 'Application',
        children: [
            {
                key: 'support',
                label: 'Help & Support',
                path: '/support',
                icon: <HiOutlineQuestionMarkCircle />,
            },
            {
                key: 'settings',
                label: 'Settings',
                path: '/settings',
                icon: <HiOutlineCog />,
            },
        ],
    },
    {
        group: 'Others',
        children: [],
    },
];
