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
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchJobs";
import useAuth from "../hooks/useAuth";
import useJobcart from "../hooks/useJobcart";

function JobsList({ posts }) {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { jobcart, setJobcart } = useJobcart();
  const location = useLocation();

  useEffect(() => {
    document.title = "HezaWorks | Jobs List";
  }, []);

  function handleAddtoCart(selectedPost) {
    if (!auth?.username) {
      // Using window.alert for now, but I'll replace it with a toast notification
      // from react-toastify
      window.alert("Please login to add to job cart")
      navigate("/login", { state: { from: location } });
    } else {
      if (jobcart.length === 0) {
        // Not sure whether this approach keeps the jobcart items specific to the
        // current user or the jobcart items will just be updated equally to all the users
        // when they log in
        setJobcart([selectedPost]);
        window.alert("Job successfully added to your cart!")
      } else {
        let jobExists = jobcart.find((job) => job.id === selectedPost.id);
        if (jobExists) {
          window.alert("Job already exists in your cart!")
        } else {
          jobcart.push(selectedPost);
          window.alert("Job successfully added to your cart!")
        }
      }
    }
  }

  return (
    <>
  <Title>Jobs available for Applications</Title>
  <SearchBar />
  {posts.map((post) => (
      <JobCard key={post.id}>
        <CompanyLogoDiv>
        {/* Random placeholder photo(s) https://picsum.photos/seed/{picsum/200/300} */}
        <CompanyLogo src={`https://picsum.photos/seed/${Math.random()*1000}/300`} />
        </CompanyLogoDiv>
        <PostTitleLink to={`/jobs/${post.id}`}>{post.title}</PostTitleLink>
        <PostAuthor>
          {post.organization}
        </PostAuthor>
        <ApplyButton onClick={() => navigate(`/jobs/${post.id}`)}>
        Apply
        </ApplyButton>
        <SaveButton onClick={() => handleAddtoCart(post)}>
        Add to Job cart
        </SaveButton>
      </JobCard>
    ))}
  </>
  );
}

export default JobsList;
