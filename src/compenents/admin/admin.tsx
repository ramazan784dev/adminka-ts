import React, {useState, useRef} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "./redux/action";
// @ts-ignore
import { v4 as uuid } from 'uuid';

const Admin = () => {
    const h1Ref = useRef<HTMLHeadingElement | any>(null);
    const [addUserData, setUserData] = useState({
        avatar: "",
        firstName: "",
        lastName: "",
        age: 0,
        address: ""
    });



    const dispatch = useDispatch()

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();        reader.onload = (e) => {
            setUserData({...addUserData, avatar: e.target?.result as string});
        };
        reader.readAsDataURL(event.target.files[0]);    }
    };

    const addUserFields = [
        {
            name: "firstName",
            type: "text",
            value: addUserData.firstName,
        },
        {
            name: "lastName",
            type: "text",
            value: addUserData.lastName,
        },
        {
            name: "age",
            type: "text",
            value: addUserData.age,
        },
        {
            name: "address",
            type: "text",
            value: addUserData.address,
        },
    ]

    async function changeInputs (e: any) {
        const {name, value} = e.target

        setUserData({...addUserData, [name]: value});
    }
    const submitButton = () => {
        dispatch(addUser({...addUserData, age: +addUserData.age, id: uuid() }))
    }

    return (
        <div className="bg-blue-400 py-24">
            <div className="container">
                <div className="">
                    <h1 className="text-center text-4xl">CREATE USER</h1>
                    <div className="flex flex-col w-[400px]">
                        <img className="w-[200px]" src={addUserData.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user"/>
                        <button onClick={() => h1Ref.current.click()}>file</button>
                        <input type="file" name="avatar" ref={h1Ref} style={{display: "none"}} onChange={handlePhotoChange}/>
                        {
                            addUserFields.map((field) => (
                                <input className="my-1" type={field.type}
                                       placeholder={field.name}
                                       name={field.name}
                                       value={field.value} onChange={changeInputs}/>
                            ))
                        }
                        <button onClick={submitButton}>add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;