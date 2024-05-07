// Display all users
/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { PageError, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles';
import {
    StyledLink, Table, TableBody, TableCell,
    TableContainer, TableHeader, TableHeaderCell,
    TableRow, TableTitle, TableButton } from '../styles/ApplicationsTable.styles';
import { BASE_URL } from '../api/axios';

const TALENT_USERS = '/auth/users'

function Users() {
    const axiosPrivate = useAxiosPrivate();
    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks - Users List';
        axiosPrivate.get(TALENT_USERS,
            { headers: { 'Content-Type': 'application/json' },
        withCredentials: false }
            )
            .then((response) => {
                setUsers(response.data);
                setIsLoading(false)
            })
            .catch((err) => {
                if (!err.response) {
                setError('No response from server');
            } else if (err.response?.status === 401) {
                setError('Unauthorized');
            }
        });
    }, []);

    if (isLoading) {
        return <PageLoadingWrapper>
            <PageLoading>Loading...</PageLoading>
            </PageLoadingWrapper>
    }

    else if (error) {
        return <PageLoadingWrapper>
            <PageError>{error}</PageError>
            </PageLoadingWrapper>
    }

  return (
        <TableContainer>
        <TableTitle>Users List</TableTitle>
    <Table>
      <TableHeader>
        <TableRow>
        <TableHeaderCell>User ID</TableHeaderCell>
        <TableHeaderCell>Username</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Manage User</TableHeaderCell>
        </TableRow>
        </TableHeader>
        <TableBody>
      { users && users.map((user) => (   
        <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell><StyledLink to={`/adminpanel/users/${user.id}`}>View More</StyledLink></TableCell>
        </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
  )
}

export default Users