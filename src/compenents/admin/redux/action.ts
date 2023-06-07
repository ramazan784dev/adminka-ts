//   Local dependencies
import {User} from "./types";


export enum AddUserActionTypes {
    ADD_USER = "ADD_USER",
    REMOVE_USER = "REMOVE_USER",
    UPDATE_USER = "UPDATE_USER"
}


export type AddUserActionType = AddUser | RemoveUser | UpdateUser


interface AddUser {
    type: AddUserActionTypes.ADD_USER
    user: User;
}

interface RemoveUser {
    type: AddUserActionTypes.REMOVE_USER,
    id: string
}

interface UpdateUser {
    type: AddUserActionTypes.UPDATE_USER,
    user: User
}


export function addUser(user: User): AddUser {
    return {
        type: AddUserActionTypes.ADD_USER,
        user: user
    }
}


export function removeUser(id:string): RemoveUser {
    return {
        type: AddUserActionTypes.REMOVE_USER,
        id
    }
}


export function updateUser(user: User):UpdateUser {
    return {
        type: AddUserActionTypes.UPDATE_USER,
        user
    }
}


