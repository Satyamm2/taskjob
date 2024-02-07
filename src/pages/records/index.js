import axios from "axios";
import React, { useState, useEffect } from "react";

function Record() {
    const [userlist, setUserlist] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=200')
            .then((response) => {
                console.log(response);
                setUserlist(response.data.users);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Product List</h1>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">Bloodgroup</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userlist?.map((user, index) => (
                            <tr className='border' key={index}>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.firstName} {user.maidenName} {user.lastName}</td>
                                <td className="border px-4 py-2">{user.age}</td>
                                <td className="border px-4 py-2">{user.bloodGroup}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Record;