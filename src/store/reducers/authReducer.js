import { createStore } from 'redux';

const initialState = {
    account: {
        token: null,
        username: null,
        image: null,
        role: null,
    },
    isAuthenicated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                account: {
                    token: action.payload.account.token,
                    username: action.payload.account.username,
                },
                isAuthenicated: action.payload.isAuthenicated,
            };
        case 'LOGOUT':
            return { ...state, account: { token: null }, isAuthenicated: false };
        default:
            return state;
    }
};

export { authReducer, initialState };
