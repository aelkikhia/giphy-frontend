// base function for generic actions
export function createAction(type, payload) {
    return function(dispatch) {
        dispatch({ type, payload});
    };
}