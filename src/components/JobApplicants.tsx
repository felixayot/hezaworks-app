/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axiosInstance from '../api/axios';
import {
  PageError,
  PageLoading,
  PageLoadingWrapper,
} from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import {
  StyledLink,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableTitle,
} from "../styles/ApplicationsTable.styles";
import { PgContainer, PgSpan, PgButton } from "../styles/Pagination.styles";

function JobApplicants() {
  const { id } = useParams();

  const axiosPrivate = useAxiosPrivate();
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = `HezaWorks | Job Ref ${id} Applicants`;
    axiosPrivate
      .get(`/jobs/posts/job/${id}/applicants?page=${currentPage}`)
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
  }, [currentPage]);

  let applsCount = 0;
  applicants.map((appl) => {
    applsCount = appl.count;
  });
  const pageCount = Math.ceil(applsCount / 10);

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
            <TableHeaderCell>Applicant Email</TableHeaderCell>
            <TableHeaderCell>Application Status</TableHeaderCell>
            <TableHeaderCell>Date Applied</TableHeaderCell>
            <TableHeaderCell>View Application</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants &&
            applicants.map((applicant, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{applicant.application_id}</TableCell>
                  <TableCell>{applicant.job_id}</TableCell>
                  <TableCell>{applicant.applicant}</TableCell>
                  <TableCell>{applicant.status}</TableCell>
                  <TableCell>{applicant.applied_at}</TableCell>
                  <TableCell>
                    <StyledLink
                      to={`/user/applications/${applicant.application_id}`}
                    >
                      View More
                    </StyledLink>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <PgContainer>
      <PgButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</PgButton>
      <PgSpan> Page {currentPage} </PgSpan>
      <PgButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount}>Next</PgButton>
    </PgContainer>
    </>
  );
}

export default JobApplicants;
