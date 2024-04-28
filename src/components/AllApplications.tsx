/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from "react";
// import axiosInstance from '../api/axios';
import {
  PageError,
  PageLoading,
  PageLoadingWrapper,
} from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { StyledLink, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, TableTitle } from "../styles/ApplicationsTable.styles";

const ALLAPPLICANTS_URL = "/jobs/user/allapplicants";
function AllApplications() {
  const axiosPrivate = useAxiosPrivate();
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "HezaWorks - All Applicants";
    axiosPrivate
      .get(ALLAPPLICANTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
      .then((response) => {
        setApplicants(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!err?.response) {
          setError("No response from server");
        } else if (err?.response?.data === undefined) {
          setError("No applications received yet");
        } else {
          setError(`Failed to fetch data ${err?.response?.data?.message}`);
        }
      });
  }, [axiosPrivate]);

  if (error) {
    return (
      <PageLoadingWrapper>
        <PageError>{error}</PageError>
      </PageLoadingWrapper>
    );
  } else if (isLoading) {
    return (
      <PageLoadingWrapper>
        <PageLoading>Loading...</PageLoading>
      </PageLoadingWrapper>
    );
  }

  return (
    <>
      <TableTitle>Received Applications from Talent</TableTitle>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Application ID</TableHeaderCell>
            <TableHeaderCell>Job ID</TableHeaderCell>
            <TableHeaderCell>Job Title</TableHeaderCell>
            <TableHeaderCell>Applicant Email</TableHeaderCell>
            <TableHeaderCell>Application Status</TableHeaderCell>
            <TableHeaderCell>Date Applied</TableHeaderCell>
            <TableHeaderCell>View Application</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          { applicants.map((applicant, i) => (
            <TableRow key={i}>
              <TableCell>{applicant.application_id}</TableCell>
              <TableCell>{applicant.job_id}</TableCell>
              <TableCell>{applicant.title}</TableCell>
              <TableCell>{applicant.applicant}</TableCell>
              <TableCell>{applicant.status}</TableCell>
              <TableCell>{applicant.applied_at}</TableCell>
              <TableCell><StyledLink to={`/user/applications/${applicant.application_id}`}>View More</StyledLink></TableCell>
            </TableRow>
            ))
            }
        </TableBody>
      </Table>
    </>
  );
}

export default AllApplications;
