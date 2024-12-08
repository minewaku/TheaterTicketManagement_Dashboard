import { useState } from 'react';
import classNames from 'classnames';

const TagButton = ({isToggle = false, label, onClick, ...props}) => {
    const [toggle, setToggle] = useState(isToggle);

    const handleToggle = (e) => {
        setToggle(!toggle);
        onClick(e);
    };
    return (
        <button
            onClick={handleToggle}
            {...props}
            type='button'
            className={classNames(toggle ? 'bg-secondary text-white' : 'hover:bg-secondary hover:text-white transition duration-150 bg-secondary_bg', "flex w-fit flex-row items-center rounded-md px-3 py-2 outline-none")}
        >
            <span className="text-xs font-semibold">{label}</span>
        </button>
    );
};

export default TagButton;
