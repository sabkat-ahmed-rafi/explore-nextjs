import React from 'react';
import style from './page.module.css'
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

const Users = async () => {

    

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await response.json();

    return (
        <div>
            This is user Page mama.......

            <h1>Users: </h1>
            <ul>
                {
                    users.map(user => <li className={style.myList} key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>)
                }
            </ul>
        </div>
    );
};


export default Users;