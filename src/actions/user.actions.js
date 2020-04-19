import { SET_CURRENT_USER } from '../actionTypes/actionTypes';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});