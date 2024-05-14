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
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function JobsList({ posts }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks | Jobs List";
  }, []);

  return (
    <>
  <Title>Jobs available for Applications</Title>
  {posts.map((post) => (
      <JobCard key={post.id}>
        <PostTitleLink to={`/jobs/${post.id}`}>{post.title}</PostTitleLink>
        <PostAuthor>
          {/* <h2>Organization</h2> */}
          {post.organization}
        </PostAuthor>
        {/* <JobpostAttribute>
          <h2>Job Description</h2>
          {post.description}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Requirements</h2>
          {post.requirements}
        </JobpostAttribute> */}
        {/* <PostDate>
          <PostDateHeader>Date Posted</PostDateHeader>
          {post.posted_at}
        </PostDate>
        <ExpireDate>
          <ExpireDateHeader>Job Expires On</ExpireDateHeader>
          {post.expires_on}
      </ExpireDate> */}
        <ApplyButton onClick={() => navigate(`/jobs/${post.id}`)}>
        Apply
        </ApplyButton>
        <SaveButton onClick={() => navigate("/user/jobcart")}>
        Add to Job cart
        </SaveButton>
      </JobCard>
    ))}
  </>
  );
}

export default JobsList;
