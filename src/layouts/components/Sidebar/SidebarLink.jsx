import React from "react"
import { Link, useLocation } from "react-router-dom"
import classNames from "classnames"
import PropTypes from 'prop-types';

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

SidebarLink.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,  
        label: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,               
    }).isRequired,    
};

export default SidebarLink