import React from "react"
import { SIDEBAR_ITEMS } from "~/store/constants"
import SidebarGroup from "./SidebarGroup"

function Sidebar() {
    return (
        <div className="sidebar h-full w-1/6 bg-base_bg">
            <div className="flex flex-col px-4">
                {SIDEBAR_ITEMS.map((item) => (
                    <SidebarGroup key={item.group} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar