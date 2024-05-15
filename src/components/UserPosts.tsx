/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import {
  JobpostAttribute,
  JobpostButton,
  JobpostContainer,
  JobpostLink,
  JobpostTitle,
  Title,
  PostButton,
  SaveButton,
  ApplyButton,
  PostTitleLink,
  PostAuthor,
  JobCard,
  PostDate,
  ExpireDate,
  ExpireDateHeader,
  PostDateHeader,
} from "../styles/Jobpost.styles";
import { PgButton, PgContainer, PgSpan } from "../styles/Pagination.styles";
import { useNavigate } from "react-router-dom";

function UserPosts() {
  const axiosPrivate = useAxiosPrivate();
  const [Jobposts, setJobposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks | My Job Posts";
    axiosPrivate.get(`jobs/user/myposts?page=${currentPage}`, {
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
          setError("No response from server");
        } else if (err.response.status === 404) {
          setError("404");
        } else {
          setError("Failed to fetch data. Please try again later.");
        }
      });
  }, [currentPage]);

  let jobsCount = 0;
  Jobposts.map((post) => {
    jobsCount = post.count;
  });
  const pageCount = Math.ceil(jobsCount / 4);

  if (error === "404") {
    return <PageLoadingWrapper>
      <PageError>You haven't posted any jobs yet.</PageError><br />
      <PageErrorButton onClick={() => {navigate('/postjob')}}>Create one job here</PageErrorButton>
      </PageLoadingWrapper>
  } else if (error) {
    return <PageLoadingWrapper>
      <PageError>{error}</PageError><br />
      <PageErrorButton onClick={() => window.location.reload()}>Try again</PageErrorButton>
      </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
      <PageLoading>Loading...</PageLoading>
      </PageLoadingWrapper>
  } else {
    return (
      <>
      <Title>My Job Posts({jobsCount})</Title>
      {Jobposts && Jobposts.map((post) => (
      <JobCard key={post.id}>
      <PostTitleLink to={`/user/jobs/${post.id}`}>{post.title}</PostTitleLink>
      <PostAuthor>{post.posted_at}</PostAuthor>
      <ApplyButton onClick={() => navigate(`/user/jobs/${post.id}`)}>
          View this post
          </ApplyButton>
        </JobCard>
      ))}
  <PgContainer>
      <PgButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</PgButton>
      <PgSpan> Page {currentPage} </PgSpan>
      <PgButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount}>Next</PgButton>
  </PgContainer>
  </>
  )
  }
}

export default UserPosts;
