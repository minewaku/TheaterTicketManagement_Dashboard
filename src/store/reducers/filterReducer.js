import { FILTER_ACTIONS } from './actions';

const filter = { criteria: {}, _page: 1, _limit: 10, _sort: [], _order: 'asc' };
const orderOptions = ['asc', 'desc'];

const initialState = { filter, orderOptions };

const filterReducer = (state, action) => {
    switch (action.type) {
        case FILTER_ACTIONS.SET_CRITERIA:
            return { ...state, filter: { ...state.filter, _page: 1, criteria: action.payload.criteria,  } };
        case FILTER_ACTIONS.SET_PAGE:
            return { ...state, filter: { ...state.filter, _page: action.payload.page } };
        case FILTER_ACTIONS.SET_LIMIT:
            return { ...state, filter: { ...state.filter, _page: 1, _limit: action.payload.limit } };
        case FILTER_ACTIONS.SET_SORT:
            const newSort = state.filter._sort.includes(action.payload.sort)
                ? state.filter._sort.filter((item) => item !== action.payload.sort)
                : [...state.filter._sort, action.payload.sort];
            return { ...state, filter: { ...state.filter, _sort: newSort } };
        case FILTER_ACTIONS.SET_ORDER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    _order: orderOptions.includes(action.payload.order) ? action.payload.order : 'asc',
                },
            };
        default:
            return state;
    }
}

export {filterReducer, initialState};