import { useState, useEffect } from "react";
//import Jobposts from "../assets/jobposts.json";
import JobsList from "./JobsList";
import { JobpostContainer } from "../styles/Jobpost.styles";
import axios from "../api/axios";
//import { useParams } from "react-router-dom";
//import useAuth from "../hooks/useAuth";

const USERPOSTS_URL = 'jobs/user/myposts';

function UserPosts() {
  //const { auth } = useAuth();

  const [Jobposts, setJobposts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(USERPOSTS_URL, {
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
          setError("No response from server");
        } else {
          setError(`Failed to fetch data ${err?.response?.data?.message}`);
        }
      });
  }, []);
  if (isLoading) {
    return <JobpostContainer>Loading...</JobpostContainer>;
  } else if (error) {
    return <JobpostContainer>{error}</JobpostContainer>;
  } else {
    return <JobsList posts={Jobposts} />;
  }
}

export default UserPosts;
