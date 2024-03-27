import { useState, useEffect } from "react";
import axios from "../api/axios";
import { PageError, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";

const TALENTS_URL = "/auth/users/talentlist";

function TalentsList() {
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(TALENTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setTalents(response.data);
            setIsLoading(false);
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else {
            setError('Failed to fetch data. Please try again later');
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
  } else {
    return (
      talents.map((talent) => (
        <div key={talent.id}>
          <h1>{talent.first_name} {talent.last_name}</h1>
          <h2>{talent.email}</h2>
          <h3>{talent.phone_number}</h3>
          <h4>{talent.location}</h4>
          <h5>{talent.skills}</h5>
          <h6>{talent.experience}</h6>
          <h6>{talent.resume}</h6>
        </div>
      )
    ) 
  )}
}

export default TalentsList;
