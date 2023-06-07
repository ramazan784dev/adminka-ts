import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../admin/redux/action";


export default function Menu() {
    const dispatch = useDispatch()
    const {users} = useSelector((state: any) => state.addUser)
    const deleteUser = (id:any) => {
        dispatch(removeUser(id))
    }
    return (
        <div className="container">
            <div className="flex items-start justify-between gap-4 flex-wrap">
                {
                    users.map((user: any) => (
                        <div className="w-[300px] bg-purple-600 py-3 px-3 rounded-2xl my-2">
                            <img src={user.avatar} alt="avatar"/>
                            <h1>firstName: {user.firstName}</h1>
                            <h1>lastName: {user.lastName}</h1>
                            <h1>age: {user.age}</h1>
                            <h1>address: {user.address}</h1>
                            <button onClick={deleteUser} className="bg-red-800">DELETE</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}