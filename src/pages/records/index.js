// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function Record() {
//     const [userlist, setUserlist] = useState([]);
//     useEffect(() => {
//         axios.get('https://dummyjson.com/users?limit=200')
//             .then((response) => {
//                 console.log(response);
//                 setUserlist(response.data.users);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);
//     return (
//         <>
//             <div className="container mx-auto">
//                 <h1 className="text-2xl font-bold mb-4">Product List</h1>
//                 <table className="table-auto">
//                     <thead>
//                         <tr>
//                             <th className="border px-4 py-2">ID</th>
//                             <th className="border px-4 py-2">Name</th>
//                             <th className="border px-4 py-2">Age</th>
//                             <th className="border px-4 py-2">Bloodgroup</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userlist?.map((user, index) => (
//                             <tr className='border' key={index}>
//                                 <td className="border px-4 py-2">{user.id}</td>
//                                 <td className="border px-4 py-2">{user.firstName} {user.maidenName} {user.lastName}</td>
//                                 <td className="border px-4 py-2">{user.age}</td>
//                                 <td className="border px-4 py-2">{user.bloodGroup}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default Record;


import axios from "axios";
import React, { useState, useEffect } from "react";

function Record() {
    const [userlist, setUserlist] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        maidenName: "",
        age: "",
        bloodGroup: ""
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://dummyjson.com/users/add', formData)
            .then((response) => {
                console.log(response.data);
                axios.get('https://dummyjson.com/users?limit=200')
                    .then((response) => {
                        setUserlist(response.data.users);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                setFormData({
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
            <div className="container mx-auto">

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label>
                            First Name:
                            <input
                                className="border-2 border-black"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                className="border-2 border-black"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Middle Name:
                            <input
                                className="border-2 border-black"
                                type="text"
                                name="maidenName"
                                value={formData.maidenName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                className="border-2 border-black"
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Blood Group:
                            <input
                                className="border-2 border-black"
                                type="text"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="border p-2 bg-black text-white hover:bg-gray-600 w-fit" type="submit">Add User</button>
                    </div>
                </form>
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
