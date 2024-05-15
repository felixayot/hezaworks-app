// Display all users
/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import {
    StyledLink, Table, TableBody, TableButton, TableCell,
    TableContainer, TableHeader, TableHeaderCell,
    TableRow, TableTitle } from '../styles/ApplicationsTable.styles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { PageError, PageLoadingWrapper } from '../styles/PageLoading.styles';

const RECRUITERS_USERS = '/auth/users/recruiters'

function Recruiters() {
    const axiosPrivate = useAxiosPrivate();
    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks | Recruiters List';
        axiosPrivate.get(RECRUITERS_USERS,
            { headers: { 'Content-Type': 'application/json' },
        withCredentials: false
        })
            .then((response) => {
                setUsers(response.data);
                setIsLoading(false)
            })
            .catch((err) => {
                if (!err.response) {
                    setError('No response from server');
                } else if (err.response?.status === 401) {
                    setError('Unauthorized');
                } else {
                    setError('An error occurred');
                }
            });
    }, []);

    if (isLoading) {
        return <PageLoadingWrapper>
            <PageError>Loading...</PageError>
            </PageLoadingWrapper>
    }

    else if (error) {
        return <PageLoadingWrapper>
            <PageError>{error}</PageError>
            </PageLoadingWrapper>
    }

    return (
        <TableContainer>
        <TableTitle>Recruiters List</TableTitle>
    <Table>
      <TableHeader>
        <TableRow>
        <TableHeaderCell>User ID</TableHeaderCell>
        <TableHeaderCell>Username</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
    {/* <TableHeaderCell>Change Role</TableHeaderCell>
    <TableHeaderCell>Create a Recruiter</TableHeaderCell> */}
        <TableHeaderCell>Manage Recruiter</TableHeaderCell>
        </TableRow>
        </TableHeader>
        <TableBody>
      { users && users.map((user) => (   
        <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell><StyledLink to={`/adminpanel/recruiters/${user.id}`}>View More</StyledLink></TableCell>
        </TableRow>
            ))}
            </TableBody>
            </Table>
        </TableContainer>
  )
}

export default Recruiters
