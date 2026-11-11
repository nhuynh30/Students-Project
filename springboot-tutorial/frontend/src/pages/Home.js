import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        const result = await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (
        <div className="container py-4">
            <div className="table-responsive shadow">
                <table className="table border align-middle mb-0">
                    <thead className="border-bottom border-dark border-2">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className="d-flex gap-2 justify-content-center">
                                        <button className="btn btn-primary">
                                            View
                                        </button>
                                        <Link className="btn btn-outline-primary" to={`/edituser/${user.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
