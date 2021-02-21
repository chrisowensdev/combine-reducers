import { ADD_AUTHOR, REMOVE_BOOK } from '../actions/actionTypes';

let initialState = {
    authors: [],
};

const authorReducer = (state = initialState, action) => {
    let idx;
    switch (action.type) {
        case ADD_AUTHOR:
            return {
                ...state,
                authors: [...state.authors, action.author],
            };

        case REMOVE_BOOK:
            idx = state.authors.findIndex((author) => author.id === action.id);
            return {
                ...state,
                authors: [
                    ...state.authors.slice(0, idx),
                    ...state.authors.slice(idx + 1),
                ],
            };

        default:
            return state;
    }
};

export default authorReducer;
