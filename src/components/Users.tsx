// Display all users
import { useState, useEffect } from 'react';
import { JobpostContainer, JobpostTitle, JobpostAttribute } from '../styles/Jobpost.styles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';

function Users() {
    const [ users, setUsers ] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        document.title = 'HezaWorks - Users List';
        let isMounted = true;
        const Controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/auth/users',
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
    </article>
  )
}

export default Users