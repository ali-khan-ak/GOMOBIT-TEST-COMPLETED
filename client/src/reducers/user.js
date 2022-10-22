import { CREATE, DELETE, FETCH_ALL, FETCH_USER } from "../constants/actionTypes";

export default (state ={user:[]} , action) => {
    switch (action.type) {
        case CREATE:
            return {...state,user: [...state.user, action.payload] }
        case FETCH_ALL:
            return action.payload;
        case FETCH_USER:
            return  {...state, user: action.payload.user }
        default:
            return state;
    }
}