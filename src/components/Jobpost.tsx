import { useState, useEffect } from "react";
//import Jobposts from "../assets/jobposts.json";
import JobsList from "./JobsList";
import axios from "../api/axios";
import { PageError, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";

const JOBPOSTS_URL = "/jobs/posts";

/*
const res = Jobposts && Jobposts.map((post) => {
    return (
        <JobpostContainer key={post.id}>
        <JobpostTitle>{post.title}</JobpostTitle>
        <JobpostDescription>{post.description}</JobpostDescription>
        <JobpostRequirements>{post.requirements}</JobpostRequirements></JobpostContainer>
)}
)
*/

function Jobpost() {
  const [Jobposts, setJobposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(JOBPOSTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setJobposts(response.data);
            setIsLoading(false);
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else {
            setError(`Failed to fetch data ${err?.response?.data?.message}`);
          }
        });
  }, []);

  if (error) {
    return <PageLoadingWrapper>
    <PageError>{error}</PageError>
    </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
    <PageLoading>Loading...</PageLoading>
    </PageLoadingWrapper>
  }
  
  else {
    return (
      <JobsList posts={Jobposts} />
    ) 
  }
}

export default Jobpost;
