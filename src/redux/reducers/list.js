import { listConstants } from "../constants";

const initialState = {
    list: [],
    response: "",
    listOne: "",
}

const list = function list(state=initialState, action) {
    switch (action.type) {
        case listConstants.GETALL_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
            }

        case listConstants.GETALL_LIST_FAILURE:
            return {
                ...state,
                response: action.payload,
            }
    
        default:
            return state
    }
}

export default list