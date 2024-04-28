// Display all users
/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import { JobpostTitle, JobpostAttribute } from '../styles/Jobpost.styles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';

function Users() {
    const [ users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        document.title = 'HezaWorks - Users List';
        let isMounted = true;

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/auth/users');
                isMounted && setUsers(response.data);
                console.log(JSON.stringify(response.data));
            } catch (err) {
                console.error(err);
            }
        };

        getUsers();

        return () => {
            isMounted = false;
        };
    }, []);

  return (
    <article>
        <JobpostTitle>Users List</JobpostTitle>
         { users?.length
         ? (
         <ul>
            {users.map((user, i) =>
            <ul>
         <li key={i}>{user?.username}</li>
         <li>{user?.email}</li>
         <li>{user?.roles}</li>
         </ul>)}
         </ul>
         )
         :
        <JobpostAttribute>No users to found</JobpostAttribute>
         }
    </article>
  )
}

export default Users