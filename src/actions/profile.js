import profile_api from '../apis/giphy_profile';
import {
    FETCH_CATEGORIES,
    CREATE_CATEGORY,
    SELECT_CATEGORY,
    // ADD_GIF,
    // ADD_GIF_TO_CATEGORY,
} from './action_types';

export const addCategory = (name) => async (dispatch, getState) => {

    const { userId } = getState().auth;
    const response = await profile_api.post(`/categories/${name}`;

    dispatch({
        type: CREATE_CATEGORY,
        payload: {...response.data, ...{'current': current, 'target': target}} });
};

export const fetchCategories = () => async dispatch => {
    const response = await profile_api.get('/categories');
    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};