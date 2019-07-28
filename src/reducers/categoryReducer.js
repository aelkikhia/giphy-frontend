import _ from 'lodash';
import {
    CREATE_CATEGORY, FETCH_CATEGORIES, SELECTED_CATEGORY
} from "../actions/action_types";


const INITIAL_STATE = {
    list: {},
    layout: [],
    selected: ""
};


export default (state = INITIAL_STATE, {type, payload}) => {

    switch(type) {

        case FETCH_CATEGORIES:
            return {...state, list:_.mapKeys(payload, 'id'), boards:payload};

        case CREATE_CATEGORY:
            return { ...state, layout: payload};

        case SELECTED_CATEGORY:
            return {...state, selected: payload};
        default:
            return state;
    }
}
