import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateUser({ setUserlist }) {
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        bloodGroup: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userIdToUpdate = formData.id;
        axios.put(`https://dummyjson.com/users/${userIdToUpdate}`, formData)
            .then((response) => {
                console.log(response.data);
                // After successful update, fetch updated user list
                axios.get('https://dummyjson.com/users?limit=200')
                    .then((response) => {
                        setUserlist(response.data.users);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // Clear form data after submission
                setFormData({
                    id: "",
                    firstName: "",
                    lastName: "",
                    age: "",
                    bloodGroup: ""
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label>
                            User ID:
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Blood Group:
                            <input
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="border p-2 bg-black text-white hover:bg-gray-600 w-fit" type="submit">Update User</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateUser;