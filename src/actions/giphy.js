import axios from 'axios';
import {createAction} from "./base_actions"

import {SEARCH_FOR_IMAGES, SELECTED_GIPHY_IMAGE, TOGGLE_LIKE_IMAGE } from "../action_types";

// TODO: move to config file that can be injected at runtime
const baseURL = 'http://localhost:5000/';



export const fetchGiphyImages = (userInput) => (dispatch, getState) => {
    return dispatch({
        type: SEARCH_FOR_IMAGES,
        payload: axios.get(`${baseURL}search`, {
            params: {
                external_user: getState().auth.userId,
                search_input: userInput
            }
        })
    });
};

// TODO: move to generic action/reducer file
export const selectedImage = (image) => createAction(SELECTED_GIPHY_IMAGE, image);

export const toggleLikeImage = (image_id) => dispatch => {
    return dispatch({
        type: TOGGLE_LIKE_IMAGE,
        payload: axios.get(`${baseURL}image/${image_id}`)
    });
};