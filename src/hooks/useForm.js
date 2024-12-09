import { useState } from 'react';
import { useModal } from '~/hooks';
import set from 'lodash/set';
import dayjs from 'dayjs';
import { cloneDeep } from 'lodash';

const useForm = (initialValue = {}) => {
    const { closeModal } = useModal();
    const [details, setDetails] = useState(initialValue);

    // const handleChange = async (e) => {
    //     console.log('Event from useForm:', e);
    //     const { name, value } = e.currentTarget?.value && e.currentTarget?.name ? e.currentTarget : e.target;
    //     setDetails((prev) => {
    //         const updateValue = cloneDeep(prev);
    //         set(updateValue, name, value);
    //         return updateValue;
    //     });
    //     console.log('details: ', details);
    // };

    const handleChange = async (e) => {
        console.log('Event from useForm:', e);

        // Extract name and value properly
        const { name, value } = e.currentTarget?.value && e.currentTarget?.name ? e.currentTarget : e.target;

        setDetails((prev) => {
            const updatedValue = cloneDeep(prev); // Deep copy of previous state
            set(updatedValue, name, value); // Update the specific field in the copy
            console.log('Updated Value Inside Setter:', updatedValue); // Log to confirm update
            return updatedValue; // Return the updated copy
        });
    };
    const handleTime = async (name, value) => {
        setDetails((prev) => {
            const updateValue = cloneDeep(prev);
            set(updateValue, name, value);
            return updateValue;
        });
        console.log('details: ', details);
    };

    const handleArray = async (e) => {
        const { name, value } = e.currentTarget?.value && e.currentTarget?.name ? e.currentTarget : e.target;

        setDetails((prev) => {
            if (!Array.isArray(prev[name])) {
                return prev;
            }

            if (prev[name].includes(value)) {
                return { ...prev, [name]: prev[name].filter((item) => item !== value) };
            } else {
                return { ...prev, [name]: [...prev[name], value].sort((a, b) => a.localeCompare(b)) };
            }
        });
    };

    const handleSubmit = async (e, submitAction) => {
        submitAction(details);
        closeModal();
        e.preventDefault();
    };

    const handleImage = async (e, path) => {
        console.log('Event from useForm:', e);
        const { name, value } = e.currentTarget?.value && e.currentTarget?.name ? e.currentTarget : e.target;
        const newPath = value.replace('C:\\fakepath\\', `src/assets/${path}/`);

        setDetails((prev) => {
            const updateValue = cloneDeep(prev);
            set(updateValue, name, newPath);
            return updateValue;
        });
    };

    return { details, setDetails, handleChange, handleTime, handleArray, handleImage, handleSubmit };
};

export default useForm;
