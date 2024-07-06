/* eslint-disable */
// @ts-nocheck

import { useEffect } from "react";
import {
  Title,
  SaveButton,
  ApplyButton,
  PostTitleLink,
  PostAuthor,
  JobCard,
  CompanyLogo,
  CompanyLogoDiv,
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
} from "../styles/Jobpost.styles";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchJobs";

function JobsList({ posts }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks | Jobs List";
  }, []);

  return (
    <>
  <Title>Jobs available for Applications</Title>
  <SearchBar />
  {/* <SearchForm>
    <SearchLabel htmlFor="search">Search for jobs</SearchLabel>
    <SearchInput
    type="text"
    id="search"
    name="search"
    placeholder="Enter a job title keyword e.g Engineer"/>
    <SearchButton onClick={() => navigate("/jobs/searchresults")}>Search</SearchButton>
  </SearchForm> */}
  {posts.map((post) => (
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
        <SaveButton onClick={() => disabled}>
        Add to Job cart
        </SaveButton>
      </JobCard>
    ))}
  </>
  );
}

export default JobsList;
