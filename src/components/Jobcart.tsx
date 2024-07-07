/* eslint-disable */
// @ts-nocheck

import { useEffect } from 'react';
import { Title, JobCard, CompanyLogoDiv, CompanyLogo, PostTitleLink, PostAuthor, ApplyButton, SaveButton } from "../styles/Jobpost.styles";
import { PageError, PageErrorButton, PageLoadingWrapper } from '../styles/PageLoading.styles';
import { useNavigate } from 'react-router-dom';
import useJobcart from '../hooks/useJobcart';

function Jobcart() {
    const { jobcart } = useJobcart()
    const navigate = useNavigate()

    useEffect(() => {
      document.title = 'HezaWorks | My Job Cart';
      // setCartposts([
      //   {
      //     "id": 0,
      //     "title": "Software Engineer",
      //     "organization": "Google",
      //     "description": "Develop software applications",
      //     "requirements": "3 years experience",
      //     "posted_at": "2021-12-01",
      //     "expires_on": "2022-12-01"
      //   }
      // ]);
    }, []);

  const count = jobcart.length
  // console.log(jobcart)

  function handleRemovefromCart(selectedPost) {
    // let jobExists = jobcart.find((job) => job.id === selectedPost.id);
    // if (jobExists) {
      // jobcart.pop(selectedPost);
      // jobcart.filter((job) => job.id !== selectedPost.id);
      // jobcart.splice(jobcart.indexOf(selectedPost), 1);
      // jobcart.splice(selectedPost.id, 1
    const index = jobcart.indexOf(selectedPost)
    jobcart.splice(index, 1)
    window.alert("Job post successfully removed from the cart!")
    // window.location.reload()
  }

  if (count != 0) {
    return (
      <>
      <Title style={{ fontSize: "20px" }}>{`Posts in Jobcart(${count})`}</Title>
        {jobcart.map((post) => (
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
        <SaveButton onClick={() => handleRemovefromCart(post)}>
        Remove from Job cart
        </SaveButton>
        </JobCard>
        ))}
        </>
    )
  } else {
    return (
      <PageLoadingWrapper>
      <PageError>You currently have no item in your job cart.</PageError><br />
      <PageErrorButton onClick={() => navigate(-1)}>Go Back</PageErrorButton>
      </PageLoadingWrapper>
  )
}
}

export default Jobcart
