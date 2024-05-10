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
  Title
} from "../styles/Jobpost.styles";
import { useNavigate } from "react-router-dom";

const USERPOSTS_URL = 'jobs/user/myposts';

function UserPosts() {
  const axiosPrivate = useAxiosPrivate();
  const [Jobposts, setJobposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks | My Job Posts";
    axiosPrivate.get(USERPOSTS_URL, {
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
  }, [axiosPrivate]);

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
      <Title>My Job Posts</Title>
      {Jobposts && Jobposts.map((post) => (
      <JobpostContainer key={post.id}>
        <JobpostTitle>{post.title}</JobpostTitle>
        <JobpostAttribute>
          <h2>Job Description</h2>
          {post.description}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Requirements</h2>
          {post.requirements}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Date Posted</h2>
          {post.posted_at}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Expires On</h2>
          {post.expires_on}
        </JobpostAttribute>
        <JobpostButton><JobpostLink to={`/user/jobs/${post.id}`}>View this Post</JobpostLink></JobpostButton>
      </JobpostContainer>
  ))
  }
  </>
  )
  }
}

export default UserPosts;
