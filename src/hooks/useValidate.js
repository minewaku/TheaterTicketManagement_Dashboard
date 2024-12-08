import { useState } from 'react';
import { useModal } from '~/hooks';

const useValidate = (initalValue = {}) => {
    const { closeModal } = useModal();
    const [details, setDetails] = useState(initalValue);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleArray = (e) => {
        const { name, value } = e.currentTarget;

        setDetails((prev) => {
            if (!Array.isArray(prev[name])) {
                return prev;
            }

            if (prev[name].includes(value)) {
                return { ...prev, [name]: prev[name].filter((item) => item !== value) };
            } else {
                return { ...prev, [name]: [...prev[name], value] };
            }
        });
    };

    const handleSubmit = (e, submitAction, onReload = false) => {
        submitAction(details);
        closeModal();
        e.preventDefault();
        onReload && window.location.reload();
        console.log('Details from useValidate', details);
    };

    return { details, setDetails, handleChange, handleArray, handleSubmit };
};

export default useValidate;
