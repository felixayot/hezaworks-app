/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import JobsList from "./JobsList";
import axiosInstance from "../api/axios";
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";
import { PgButton, PgContainer, PgSpan } from "../styles/Pagination.styles";

function Jobposts() {
  const [Jobposts, setJobposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    axiosInstance.get(`/jobs/posts?page=${currentPage}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setJobposts(response.data);
            setIsLoading(false);
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else {
            setError('Failed to fetch data');
          }
        });
  }, [currentPage]);

  let jobsCount = 0;
  Jobposts.map((post) => {
    jobsCount = post.count;
  });
  const pageCount = Math.ceil(jobsCount / 4);

  if (error) {
    return <PageLoadingWrapper>
    <PageError>{error}</PageError><br />
    <PageErrorButton onClick={() => window.location.reload()}>Try again</PageErrorButton>
    </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
    <PageLoading>Loading...</PageLoading>
    </PageLoadingWrapper>
  }
  
  else {
    return (
      <>
      <JobsList posts={Jobposts} />
      <PgContainer>
      <PgButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</PgButton>
      <PgSpan> Page {currentPage} </PgSpan>
      <PgButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount}>Next</PgButton>
    </PgContainer>
    </>
    ) 
  }
}

export default Jobposts;
