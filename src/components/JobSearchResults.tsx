/* eslint-disable */
// @t/s-nocheck

import { useState, useEffect } from "react";
import {
  Title,
  SaveButton,
  ApplyButton,
  PostTitleLink,
  PostAuthor,
  JobCard,
  CompanyLogo,
  CompanyLogoDiv,
  SearchButton,
  SearchText,
} from "../styles/Jobpost.styles";
import { useNavigate } from "react-router-dom";
import Results from "./SearchJobs";

function SearchResults() {
  const navigate = useNavigate();

  if (Results.length != 0) {
    return (
        <>
        <Title>Search Results:</Title>
        {Results.map((post) => (
        <JobCard key={post.id}>
        <CompanyLogoDiv>
        {/* Random placeholder photos https://picsum.photos/seed/{picsum/200/300} */}
        <CompanyLogo src={`https://picsum.photos/seed/${Math.random()*1000}/300`} />
        </CompanyLogoDiv>
        <PostTitleLink to={`/jobs/${post.id}`}>{post.title}</PostTitleLink>
        <PostAuthor>
          {post.organization}
        </PostAuthor>
        <ApplyButton onClick={() => navigate(`/jobs/${post.id}`)}>
        Apply
        </ApplyButton>
        <SaveButton onClick={() => navigate("#")}>
        Add to Job cart
        </SaveButton>
      </JobCard>
    ))}
  </>
  );
} else {
    return (
        <>
        <Title>Search Results:</Title>
        <SearchText>No results found</SearchText>
        <SearchButton onClick={() => navigate("/jobs")}>Go back</SearchButton>
        </>
    );
}
}

export default SearchResults;
