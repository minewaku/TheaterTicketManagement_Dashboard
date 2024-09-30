import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses = 'flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

function Sidebar() {

    return (
        <div className='sidebar bg-white overflow-x-hidden w-1/6'>
            <div className='px-4'> 
                <div className=''>
                    { DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                    )) }

                    <div className="my-0.5 border-t border-gray-200"></div>
                </div>

                <div className='flex flex-col'>
                    { DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item}/>
                    )) }

                    <div to={'/logout'} className={classNames('text-red-400 cursor-pointer', linkClasses)}>
                        <span className='text-xl'> <HiOutlineLogout/> </span>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarLink({item}) {
    const { pathname } = useLocation()

    return (
        <Link 
            to={item.path} 
            className="px-4 flex items-center justify-start hover:cursor-pointer grow text-left pe-4 ps-6 py-2.5 mb-1 rounded-lg" 
            style={item.path === pathname ? { color: 'rgb(103, 58, 183)', backgroundColor: 'rgb(237, 231, 246)', fontWeight: '500' } : {}}
        >
            <div className='min-w-9 text-xl flex items-center'>
                {item.icon}
            </div>
            <div className='my-1 flex items-center overflow-hidden'>
                <h5 className='line overflow-hidden text-ellipsis whitespace-nowrap'>{item.label}</h5> 
            </div>
        </Link>
    )
}

export default Sidebar