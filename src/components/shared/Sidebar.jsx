import React from "react"
import { FcBullish } from "react-icons/fc"
import { DASHBOARD_SIDEBAR_ITEMS } from "../../store/constants/navigation"
import { Link, useLocation } from "react-router-dom"
import { FaDashcube } from "react-icons/fa6"
import classNames from "classnames"
import { HiOutlineLogout } from "react-icons/hi"

function Sidebar() {
    return (
        <div className="sidebar h-full w-1/6 bg-base_bg">
            <div className="flex flex-col px-4">
                {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
                    <SidebarGroup key={item.group} item={item} />
                ))}
            </div>
        </div>
    )
}

function SidebarGroup({ item }) {
    return (
        <div className="flex flex-col">
            <div className="align-left mb-2 mt-2 p-1 font-semibold">
                {item.group}
            </div>

            {item.items.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}

            <div className="my-0.5 border-t border-bder"></div>
        </div>
    )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={item.path}
            className={classNames(
                item.path === pathname ? "text-primary bg-primary_bg" : "",
                "hover:bg-primary_bg hover:text-primary mb-1 flex grow items-center justify-start rounded-lg px-4 py-2.5 pe-4 ps-6 text-left font-medium transition duration-100 ease-out hover:cursor-pointer hover:ease-in",
            )}
        >
            <div className="flex min-w-8 items-center text-lg">{item.icon}</div>
            <div className="my-1 flex items-center overflow-hidden">
                <h5 className="line overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.label}
                </h5>
            </div>
        </Link>
    )
}

export default Sidebar
