import { useState, useEffect } from "react";
//import Jobposts from "../assets/jobposts.json";
import {
  JobpostContainer,
  JobpostAttribute,
  JobpostTitle,
  JobpostButton,
} from "../styles/Jobpost.styles";
import JobsList from "./JobsList";
import axios from "../api/axios";

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
          if (!err.response) {
            setError('No response from server');
          } else {
            setError(`Failed to fetch data ${err.response.data.message}`);
          }
        });
  }, []);

  function handleApply() {
    window.location.href = "/jobs/:id/apply";
  }

  function handleAddToCart() {
    window.location.href = "/jobs/:id/add";
  }
  return (
    <JobsList posts={Jobposts} title={'Job posts to apply'}/>
  ) 
}

export default Jobpost;
