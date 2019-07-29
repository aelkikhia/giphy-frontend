// import _ from 'lodash';
import {
    SEARCH_FOR_IMAGES_FULFILLED,
    SEARCH_FOR_IMAGES_PENDING,
    SEARCH_FOR_IMAGES_REJECTED,
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
        case SEARCH_FOR_IMAGES_FULFILLED:
            // TODO: consider if mapping list of objects to hash of objects and selecting id is the better way to go
            return {...state,
                images: payload.data,
                loading: false,
                // load first image in the search
                selected: payload.data.data[0]
            };
        case SEARCH_FOR_IMAGES_PENDING:
            return {...state, loading: true };
        case SEARCH_FOR_IMAGES_REJECTED:
            return {...state, loading: false, error: payload };
        case SELECTED_GIPHY_IMAGE:
            return {...state, selected: payload};
        default:
            return state
    }
}