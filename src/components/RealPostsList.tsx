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
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import SearchBar from "./SearchJobs";
import useAuth from "../hooks/useAuth";
import useJobcart from "../hooks/useJobcart";
import Search from "./SearchRealJobs";

function RealPostsList({ posts }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "HezaWorks | Jobs List";
  }, []);

  const handleView = (url) => {
    window.location.href = url;
  };

  const handleApply = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <>
      <Title>Jobs available for Applications</Title>
      <Search />
      {posts.map((post) => (
        <JobCard key={post.title}>
          <CompanyLogoDiv>
            {/* Random placeholder photo(s) https://picsum.photos/seed/{picsum/200/300} */}
            <CompanyLogo
              src={`https://picsum.photos/seed/${Math.random() * 1000}/300`}
            />
          </CompanyLogoDiv>
          <PostTitleLink to={`${post.jobURL}`}>{post.title}</PostTitleLink>
          <PostAuthor>{post.company}</PostAuthor>
          <PostAuthor style={{ gridArea: "3 / 2 / 3 / 3", textAlign: "start" }}>
            {post.location}
          </PostAuthor>
          <ApplyButton onClick={() => handleView(`${post.jobURL}`)}>
            View
          </ApplyButton>
          <SaveButton
            onClick={() => handleApply(`${post.jobURL}`)}>
            Apply
          </SaveButton>
        </JobCard>
      ))}
    </>
  );
}

export default RealPostsList;
