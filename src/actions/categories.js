// import { createAction } from './base_actions';
//
// import {
//     FETCH_CATEGORY,
//     FETCH_CATEGORIES,
//     CREATE_CATEGORY,
//     SELECTED_CATEGORY,
//     // ADD_GIF,
//     // ADD_GIF_TO_CATEGORY,
// } from './action_types';
//
// export const addCategory = (name) => async (dispatch, getState) => {
//
//     const { userId } = getState().auth;
//     const response = await profile_api.post(`/category/${name}`);
//
//     dispatch({
//             type: CREATE_CATEGORY,
//             payload: {...response.data, payload: response.data}
//         }
//     )
// };
//
// export const fetchCategories = () => async dispatch => {
//     const response = await profile_api.get('/categories');
//     dispatch({ type: FETCH_CATEGORIES, payload: response.data });
// };
//
//
// export const selectCategory = (name) => createAction(SELECTED_CATEGORY, name);