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
          {post.organization}
        </PostAuthor>
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
