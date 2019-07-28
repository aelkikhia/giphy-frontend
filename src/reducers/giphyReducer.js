// import _ from 'lodash';
import {
    FETCH_GIPHY_IMAGES_FULFILLED,
    FETCH_GIPHY_IMAGES_PENDING,
    FETCH_GIPHY_IMAGES_REJECTED,
    SELECTED_GIPHY_IMAGE
} from "../action_types";

const INITIAL_STATE = {
    images: [],
    selected: null,
    loading: false,
    error: false,
    searchInput: ""
};

export default (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case FETCH_GIPHY_IMAGES_FULFILLED:
            return {...state, images: payload.data, loading: false };
        case FETCH_GIPHY_IMAGES_PENDING:
            return {...state, loading: true };
        case FETCH_GIPHY_IMAGES_REJECTED:
            return {...state, loading: false, error: payload };
        case SELECTED_GIPHY_IMAGE:
            return {...state, selected: payload};
        default:
            return state
    }
}