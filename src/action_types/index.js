import { ActionType } from 'redux-promise-middleware';

// giphy api action types
export const FETCH_GIPHY_IMAGES = 'FETCH_GIPHY_IMAGES';
export const FETCH_GIPHY_IMAGES_PENDING = `${FETCH_GIPHY_IMAGES}_${ActionType.Pending}`;
export const FETCH_GIPHY_IMAGES_FULFILLED = `${FETCH_GIPHY_IMAGES}_${ActionType.Fulfilled}`;
export const FETCH_GIPHY_IMAGES_REJECTED = `${FETCH_GIPHY_IMAGES}_${ActionType.Rejected}`;


// search bar action types
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const UPDATE_SHOULD_FETCH = 'UPDATE_SHOULD_FETCH';
export const UPDATE_FROM_SEARCH_INPUT = 'UPDATE_FROM_SEARCH_INPUT';