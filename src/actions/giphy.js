import axios from 'axios';
import {createAction} from "./base_actions"

import {FETCH_GIPHY_IMAGES, SELECTED_GIPHY_IMAGE } from "../action_types";

// TODO: move to config file that can be injected at runtime
const API_KEY = "g18Ik9ci8NgkVAjZoRfIyqN90tpjZE9k";
const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;
const rating = 'G';
const lang = 'en';
const limit = 10;


export const fetchGiphyImages = (userInput) => dispatch => {
    return dispatch({
        type: FETCH_GIPHY_IMAGES,
        payload: axios.get(`${baseURL}&q=${userInput}&limit=${limit}&rating=${rating}&lang=${lang}`)
    });
};

// TODO: move to generic action/reducer file
export const selectedImage = (image) => createAction(SELECTED_GIPHY_IMAGE, image);