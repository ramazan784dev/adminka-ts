import {User} from "./types";
import {AddUserActionType, AddUserActionTypes} from "./action";

interface AddUserReducerState {
    users: User[];
}

const initialState: AddUserReducerState = {
    users: []
}

export function AddUserReducer(state = initialState, action: AddUserActionType) {
    switch (action.type) {
        case AddUserActionTypes.ADD_USER: {
            return {...state, users: [...state.users, action.user]}
        }
        case AddUserActionTypes.REMOVE_USER: {
            const filteredUsers = state.users.filter(user => user.id !== action.id)
            return {...state, users: filteredUsers}
        }
        case AddUserActionTypes.UPDATE_USER: {
            const filtered = state.users.filter(user => user.id !== action.user.id)
            return {...state, users: [action.type, ...filtered]}
        }
        default :{
            return initialState
        }
    }
}