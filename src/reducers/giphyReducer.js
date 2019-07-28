// import _ from 'lodash';
import {
    FETCH_GIPHY_IMAGES_FULFILLED,
    FETCH_GIPHY_IMAGES_PENDING,
    FETCH_GIPHY_IMAGES_REJECTED,
    UPDATE_SEARCH_INPUT
} from "../action_types";

const INITIAL_STATE = {
    images: [],
    loading: false,
    error: false,
    searchInput: "new"
};

export default (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case FETCH_GIPHY_IMAGES_FULFILLED:
            return {...state, images: payload.data, loading: false };
        case FETCH_GIPHY_IMAGES_PENDING:
            return {...state, loading: true };
        case FETCH_GIPHY_IMAGES_REJECTED:
            return {...state, loading: false, error: payload };
        default:
            return state
    }
}