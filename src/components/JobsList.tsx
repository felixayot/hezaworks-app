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
} from "../styles/Jobpost.styles";
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
}

export default JobsList;
