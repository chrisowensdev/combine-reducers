import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
    auth: authorReducer,
    books: bookReducer,
});

export default rootReducer;
