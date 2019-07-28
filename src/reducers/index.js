import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import categoryReducer from './categoryReducer';
import giphyReducer from './giphyReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    category: categoryReducer,
    giphy: giphyReducer
});