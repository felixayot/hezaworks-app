/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import { JobpostContainer, JobpostTitle, JobpostAttribute, JobpostButton, JobpostLink } from "../styles/Jobpost.styles";
import { PageError, PageErrorButton, PageLoadingWrapper } from '../styles/PageLoading.styles';
import { useNavigate } from 'react-router-dom';

function Jobcart() {
    const [cartposts, setCartposts] = useState<{
      id: number;
      title: string;
      organization: string;
      description: string;
      requirements: string;
      posted_at: string;
      expires_on: string;
    }[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
      document.title = 'HezaWorks | My Job Cart';
      // setCartposts([
      //   {
      //     "id": 0,
      //     "title": "Software Engineer",
      //     "organization": "Google",
      //     "description": "Develop software applications",
      //     "requirements": "3 years experience",
      //     "posted_at": "2021-12-01",
      //     "expires_on": "2022-12-01"
      //   }
      // ]);
    }, []);

  if (cartposts.length != 0) {
    return (
      cartposts.map((post) => (
        <JobpostContainer key={post.id}>
        <JobpostTitle>{post.title}</JobpostTitle>
        <JobpostAttribute>
          <h2>Organization</h2>
          {post.organization}
        </JobpostAttribute>
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
        <JobpostButton>
        <JobpostLink to={`/jobs/job/${post.id}/apply`}>Apply Now</JobpostLink>
        </JobpostButton>
        </JobpostContainer>
  )
  ))
  } else {
    return (
      <PageLoadingWrapper>
      <PageError>You currently have no item in your job cart.</PageError><br />
      <PageErrorButton onClick={() => navigate(-1)}>Go Back</PageErrorButton>
      </PageLoadingWrapper>
  )
}
}

export default Jobcart
