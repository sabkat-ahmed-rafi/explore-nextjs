import React from 'react';

interface User {
     id: number;
     name: string;
     email: string;
}

// We use Promise because It's an async function 
const fetchUserData = async (id: string): Promise<User> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.json()
}

// Setting the type of the props 
const DynamicUser = async (props: {params: {id: string}}) => {

    const user = await fetchUserData(props.params.id)

    return (
        <div>
              hello {user.name}
        </div>
    );
};

export default DynamicUser;