import { useEffect, useState } from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://coffee-store-server-steel-five.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 bg-[url(https://i.ibb.co.com/Zzrsm9Q/11.png)] bg-cover py-10 sm:py-14 lg:py-20 xl:py-28">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center text-[#374151] [text-shadow:_0_2px_4px_rgb(55_65_81_/_0.6)]">Our Users</h2>

            <div className="w-[90%] lg:w-[80%] xl:w-[70%] overflow-x-auto">
                <table className="table lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>lastSignInTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime || 'NA'}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;