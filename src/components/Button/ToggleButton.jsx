import { useState } from 'react';
import classNames from 'classnames';

const TagButton = ({ isToggle = false, children, onClick, ...props }) => {
    const [toggle, setToggle] = useState(isToggle);

    const handleToggle = (e) => {
        setToggle(!toggle);
        onClick(e);
    };
    return (
        <button
            onClick={handleToggle}
            className={classNames(
                toggle
                    ? 'bg-secondary text-white'
                    : 'bg-secondary_bg transition duration-150 hover:bg-secondary hover:text-white',
                'flex w-fit flex-row items-center rounded-md px-3 py-2 outline-none'
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default TagButton;
