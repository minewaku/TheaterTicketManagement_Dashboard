import { useState } from 'react';
import classNames from 'classnames';

const Button = ({ isToggle = false, onClick, children, ...props }) => {
    const [toggle, setToggle] = useState(isToggle);

    const handleToggle = (e) => {
        setToggle(!toggle);
        onClick(e);
    };

    return (
        <button onClick={handleToggle} {...props}>
            {children}
        </button>
    );
};

export default Button;
