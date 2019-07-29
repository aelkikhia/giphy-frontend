import { ActionType } from 'redux-promise-middleware';


export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


// Category action types
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const ADD_FAVORITE_TO_CATEGORY = 'ADD_FAVORITE_TO_CATEGORY';

// giphy api action types
export const SEARCH_FOR_IMAGES = 'SEARCH_FOR_IMAGES';
export const SEARCH_FOR_IMAGES_PENDING = `${SEARCH_FOR_IMAGES}_${ActionType.Pending}`;
export const SEARCH_FOR_IMAGES_FULFILLED = `${SEARCH_FOR_IMAGES}_${ActionType.Fulfilled}`;
export const SEARCH_FOR_IMAGES_REJECTED = `${SEARCH_FOR_IMAGES}_${ActionType.Rejected}`;

export const TOGGLE_LIKE_IMAGE = 'TOGGLE_LIKE_IMAGE';
export const TOGGLE_LIKE_IMAGE_PENDING = `${TOGGLE_LIKE_IMAGE}_${ActionType.Pending}`;
export const TOGGLE_LIKE_IMAGE_FULFILLED = `${TOGGLE_LIKE_IMAGE}_${ActionType.Fulfilled}`;
export const TOGGLE_LIKE_IMAGE_REJECTED = `${TOGGLE_LIKE_IMAGE}_${ActionType.Rejected}`;


// search bar action types

export const SELECTED_GIPHY_IMAGE = 'SELECTED_GIPHY_IMAGE';
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';