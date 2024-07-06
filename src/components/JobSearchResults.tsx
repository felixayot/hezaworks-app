/* eslint-disable */
// @t/s-nocheck

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
import { JobsearchContext } from "../context/JobsearchContext";
import { useContext } from "react";

function SearchResults() {
  const navigate = useNavigate();
  const { results } = useContext(JobsearchContext);
  const count = results.length

  if (count != 0) {
    return (
        <>
        <Title style={{ fontSize: "20px" }}>{`Search Results(${count}):`}</Title>
        {results.map((post) => (
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
    )
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
