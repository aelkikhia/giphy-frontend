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
export const FETCH_GIPHY_IMAGES = 'FETCH_GIPHY_IMAGES';
export const FETCH_GIPHY_IMAGES_PENDING = `${FETCH_GIPHY_IMAGES}_${ActionType.Pending}`;
export const FETCH_GIPHY_IMAGES_FULFILLED = `${FETCH_GIPHY_IMAGES}_${ActionType.Fulfilled}`;
export const FETCH_GIPHY_IMAGES_REJECTED = `${FETCH_GIPHY_IMAGES}_${ActionType.Rejected}`;
export const SELECTED_GIPHY_IMAGE = 'SELECTED_GIPHY_IMAGE';


// search bar action types
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';