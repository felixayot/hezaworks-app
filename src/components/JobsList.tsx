/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import {
  JobpostContainer,
  JobpostAttribute,
  JobpostTitle,
  Title,
  JobpostLink,
  JobpostButton,
} from "../styles/Jobpost.styles";
import Modal from "./Modal";

function JobsList({ posts }) {

  useEffect(() => {
    document.title = "HezaWorks - Jobs List";
  }, []);

  return (
    <>
  <Title>Jobs available for Applications</Title>
  {posts.map((post) => (
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
        <JobpostLink to={`/jobs/${post.id}`}>View More</JobpostLink>
        </JobpostButton>
        <JobpostButton>
        <JobpostLink to="/user/jobcart">Add to Job cart</JobpostLink>
        </JobpostButton>
      </JobpostContainer>
    ))}
  </>
  );
}

export default JobsList;
