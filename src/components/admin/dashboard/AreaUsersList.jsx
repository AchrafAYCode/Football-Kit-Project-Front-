import React, { useEffect, useState } from 'react';

async function getUsers() {
    const res = await fetch('https://apigenerator.dronahq.com/api/9PdhJb9d/users');
    return res.json();
}

export default function AreaUsersList() {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const userData = await getUsers();
                if (Array.isArray(userData)) {
                    setUsers(userData);
                } else {
                    setError("Invalid data format received from the API.");
                }
            } catch (error) {
                setError("Error fetching data from the API.");
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="card">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && Array.isArray(users) && users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <img src={user.avatar} width="40" height="40" style={{ borderRadius: "50%" }} alt={`${user.name}'s Avatar`} />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <span className={`badge bg-${user.role === "admin" ? 'pink' : 'green'}-500 text-white`}>
                                    {user.role}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
