/* eslint-disable */
// @ts-nocheck
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
import useJobsearch from "../hooks/useJobsearch";
import { PgButton, PgContainer, PgSpan } from "../styles/Pagination.styles";
import { paginate } from "../api/realJobs.js";

function RealSearchResults() {
  const navigate = useNavigate();
  const [paginatedResults, setPaginatedResults] = useState([]);
  const { results } = useJobsearch();
  const [currentPage, setCurrentPage] = useState(1);
  const count = results.length;
  
  useEffect(() => {
    setPaginatedResults(paginate(results, currentPage, 4));
  }, [currentPage]);

    const pageCount = Math.ceil(count / 4);

  const handleView = (url) => {
    window.location.href = url;
  };

  const handleApply = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  if (count != 0) {
    return (
      <>
        <Title
          style={{ fontSize: "20px" }}
        >{`Search Results(${count}):`}</Title>
        {paginatedResults.map((post) => (
          <JobCard key={post.title}>
            <CompanyLogoDiv>
              {/* Random placeholder photos https://picsum.photos/seed/{picsum/200/300} */}
              <CompanyLogo
                src={`https://picsum.photos/seed/${Math.random() * 1000}/300`}
              />
            </CompanyLogoDiv>
            <PostTitleLink to={`${post.jobURL}`}>{post.title}</PostTitleLink>
            <PostAuthor>{post.company}</PostAuthor>
            <PostAuthor
              style={{ gridArea: "3 / 2 / 3 / 3", textAlign: "start" }}
            >
              {post.location}
            </PostAuthor>
            <ApplyButton onClick={() => handleView(`${post.jobURL}`)}>
              View
            </ApplyButton>
            <SaveButton onClick={() => handleApply(`${post.jobURL}`)}>
              Apply
            </SaveButton>
          </JobCard>
        ))}
        <PgContainer>
          <PgButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PgButton>
          <PgSpan> Page {currentPage} </PgSpan>
          <PgButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next
          </PgButton>
        </PgContainer>
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

export default RealSearchResults;
