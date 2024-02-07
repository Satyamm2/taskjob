import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteUser({setUserlist, userlist}) {
    const [userIdToDelete, setUserIdToDelete] = useState("");

    const handleDelete = () => {
        if (userIdToDelete) {
            axios.delete(`https://dummyjson.com/users/${userIdToDelete}`)
                .then((response) => {
                    console.log(response.data);
                    // After successful deletion, fetch updated user list
                    axios.get('https://dummyjson.com/users?limit=200')
                        .then((response) => {
                            setUserlist(response.data.users);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    // Reset user ID to delete
                    setUserIdToDelete("");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("No user selected for deletion");
        }
    };
    return (
        <>
            <div className="flex flex-col">
                <label>
                    Select User ID to Delete:
                    <select
                        value={userIdToDelete}
                        onChange={(e) => setUserIdToDelete(e.target.value)}
                    >
                        <option value="">Select User ID</option>
                        {userlist?.map((user, index) => (
                            <option key={index} value={user.id}>{user.id}</option>
                        ))}
                    </select>
                </label>
                <button className="border p-2 bg-black text-white hover:bg-gray-600 w-fit" onClick={handleDelete}>Delete User</button>
            </div>
        </>
    );
};

export default DeleteUser;