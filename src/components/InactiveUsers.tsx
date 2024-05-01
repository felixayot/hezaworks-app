// Display all users
/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import {
    StyledLink, Table, TableBody, TableCell,
    TableContainer, TableHeader, TableHeaderCell,
    TableRow, TableTitle } from '../styles/ApplicationsTable.styles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { PageError, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles';

const INACTIVES_URL = '/auth/users/inactive'

function InactiveUsers() {
    const axiosPrivate = useAxiosPrivate();
    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks - Admins List';
        axiosPrivate.get(INACTIVES_URL,
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
    <TableTitle>Inactive Users List</TableTitle>
<Table>
  <TableHeader>
    <TableRow>
    <TableHeaderCell>User ID</TableHeaderCell>
    <TableHeaderCell>Username</TableHeaderCell>
    <TableHeaderCell>Email</TableHeaderCell>
    {/* <TableHeaderCell>Change Role</TableHeaderCell> */}
    <TableHeaderCell>Create a Recruiter</TableHeaderCell>
    <TableHeaderCell>Activate User</TableHeaderCell>
    </TableRow>
    </TableHeader>
    <TableBody>
  { users && users.map((user) => (   
    <TableRow key={user.id}>
    <TableCell>{user.id}</TableCell>
    <TableCell>{user.username}</TableCell>
    <TableCell>{user.email}</TableCell>
    {/* <TableCell><StyledLink to="#">Make Admin</StyledLink></TableCell> */}
    <TableCell><StyledLink to="#">Make Recruiter</StyledLink></TableCell>
    <TableCell><StyledLink to="#">Activate</StyledLink></TableCell>
    </TableRow>
        ))}
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default InactiveUsers