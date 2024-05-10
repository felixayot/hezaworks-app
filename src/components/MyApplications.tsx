/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react'
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { StyledLink, Table, TableBody, TableCell, TableContainer, TableHeader, TableHeaderCell, TableRow, TableTitle } from '../styles/ApplicationsTable.styles';
import { useNavigate } from 'react-router-dom';

const MYAPPLICATIONS_URL = '/jobs/user/myapplications';

function MyApplications() {
    const axiosPrivate = useAxiosPrivate();
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks | My Applications';
        axiosPrivate.get(MYAPPLICATIONS_URL, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          })
            .then((response) => {
                setApplications(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
              if (!err?.response) {
                setError('No response from server');
              } else if (err?.response?.data === undefined) {
                setError('No applications submitted yet');
              } else {
                setError('Failed to fetch data');
              }
            });
      }, [axiosPrivate]);

    const navigate = useNavigate()
    const handleRedirect = () => navigate(-1)
    
      if (error) {
        return <PageLoadingWrapper>
        <PageError>{ error }</PageError><br />
        <PageErrorButton onClick={handleRedirect}>Go back</PageErrorButton>
        </PageLoadingWrapper>
      } else if (isLoading) {
        return <PageLoadingWrapper>
          <PageLoading>Loading...</PageLoading>
          </PageLoadingWrapper>
      }

  return (
    <>
    <TableContainer>
    <TableTitle>My Applications List</TableTitle>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Application ID</TableHeaderCell>
          <TableHeaderCell>Job ID</TableHeaderCell>
          <TableHeaderCell>Job Title</TableHeaderCell>
          <TableHeaderCell>Application Status</TableHeaderCell>
          <TableHeaderCell>Date Applied</TableHeaderCell>
          <TableHeaderCell>View Application</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
      { applications && applications.map((application, i) => (   
          <TableRow key={i}>
            <TableCell>{application.application_id}</TableCell>
            <TableCell>{application.job_id}</TableCell>
            <TableCell>{application.job_title}</TableCell>
            <TableCell>{application.status}</TableCell>
            <TableCell>{application.applied_at}</TableCell>
            <TableCell><StyledLink to={`/user/myapplications/${application.application_id}`}>View More</StyledLink></TableCell>
          </TableRow>
          ))
        }
      </TableBody>
    </Table>
    </TableContainer>
  </>
  )
}

export default MyApplications
