import { createContext, useState } from 'react';

const ModalContext = createContext();
const ModalProvider = (props) => {
    const [modal, setModal] = useState(null);

    const closeModal = () => {
        setModal(null);
    };

    const openModal = (modal) => {
        setModal(modal);
    };

    const contextValue = {
        modal,
        closeModal,
        openModal,
    };

    return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>;
};

export { ModalProvider };
export default ModalContext;
