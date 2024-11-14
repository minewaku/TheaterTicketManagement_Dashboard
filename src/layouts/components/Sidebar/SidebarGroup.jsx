import React from "react"
import SidebarLink from "./SidebarLink"
import PropTypes from "prop-types"

function SidebarGroup({ item }) {
    return (
        <div className="flex flex-col">
            <div className="align-left mb-2 mt-2 p-1 font-semibold">
                {item.group}
            </div>

            {item.children.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}

            <div className="my-0.5 border-t border-bder"></div>
        </div>
    )
}

SidebarGroup.propTypes = {
    item: PropTypes.shape({
        group: PropTypes.string.isRequired,  
        children: PropTypes.array.isRequired,      
    }).isRequired,    
};

export default SidebarGroup