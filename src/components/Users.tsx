// Display all users
import { useState, useEffect } from 'react';
import { JobpostContainer, JobpostTitle, JobpostAttribute } from '../styles/Jobpost.styles';
import axios from '../api/axios';
import useRefreshToken from '../hooks/useRefreshToken';

function Users() {
    const [ users, setUsers ] = useState();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;
        const Controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/auth/users',
                { signal: Controller.signal });
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            Controller.abort();
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
         <button onClick={() => refresh}>Refresh</button>
         <br />
    </article>
  )
}

export default Users