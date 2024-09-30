import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { MdOutlineArticle } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key:'posts',
		label: 'Posts',
		path: '/posts',
		icon: <MdOutlineArticle />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}

]

export const DASHBOARD_SIDEBAR_ITEMS = [
	{
		group: 'Dashboard',
		items: [
			{
				key: 'support',
				label: 'Help & Support',
				path: '/support',
				icon: <HiOutlineQuestionMarkCircle />
			},
			{
				key: 'settings',
				label: 'Settings',
				path: '/settings',
				icon: <HiOutlineCog />
			},
		]
	},
	{
		group: 'Application',
		items: [
			{
				key: 'support',
				label: 'Help & Support',
				path: '/support',
				icon: <HiOutlineQuestionMarkCircle />
			},
			{
				key: 'settings',
				label: 'Settings',
				path: '/settings',
				icon: <HiOutlineCog />
			},
		]
	},
	{
		group: 'Others',
		items: [
			{
				key: 'support',
				label: 'Help & Support',
				path: '/support',
				icon: <HiOutlineQuestionMarkCircle />
			},
			{
				key: 'settings',
				label: 'Settings',
				path: '/settings',
				icon: <HiOutlineCog />
			},
		]
	}
]