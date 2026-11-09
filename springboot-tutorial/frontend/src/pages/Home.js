import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        loadUserers();
    }, []);

    const loadUserers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
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
                                        <button className="btn btn-outline-primary">
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">
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
