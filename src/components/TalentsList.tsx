/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { TalentListAttribute, TalentListContainer, TalentListLink, TalentListTitle } from "../styles/TalentList.styles";
import { Title } from "../styles/Jobpost.styles";

const TALENTS_URL = "/auth/users/talentlist";

function TalentsList() {
  const axiosPrivate = useAxiosPrivate();
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = "HezaWorks - Talents List";
    axiosPrivate.get(TALENTS_URL, {
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
          } else if (err.response?.status === 401) {
            setError('Your account is inactive. Please contact the administrator.');
          }
        });
  }, [axiosPrivate]);

  if (error) {
    return <PageLoadingWrapper>
    <PageError>{error}</PageError>
    <PageErrorButton onClick={() => window.location.reload()}>Try again</PageErrorButton>
    </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
    <PageLoading>Loading...</PageLoading>
    </PageLoadingWrapper>
  } else {
    return (
      <>
      <Title>Talents List</Title>
      {talents && talents.map((talent) => (
        <TalentListContainer key={talent.user_id}>
          <TalentListAttribute>
          <TalentListTitle>Talent Name</TalentListTitle>
          {talent.name}
        </TalentListAttribute>
          <TalentListAttribute>
          <TalentListTitle>Resume</TalentListTitle>
          <TalentListLink to="#">{talent.resume}</TalentListLink>
          </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Contact</TalentListTitle>
          {talent.phone}
        </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Email</TalentListTitle>
          {talent.email}
        </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Place of Residence</TalentListTitle>
          {talent.city}
        </TalentListAttribute>
        <TalentListAttribute>
         <TalentListTitle>Level of Education</TalentListTitle>
          {talent.education_level}
        </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Field of Study</TalentListTitle>
          {talent.field}
        </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Current or Former Employer</TalentListTitle>
        {talent.employer}
        </TalentListAttribute>
        <TalentListAttribute>
          <TalentListTitle>Current or Former Job Title</TalentListTitle>
          {talent.title}
        </TalentListAttribute>
        <TalentListAttribute>
        <TalentListTitle>Roles Performed at Former or Current Job</TalentListTitle>
          {talent.responsibilities}
        </TalentListAttribute>
      </TalentListContainer>
    ))
  }
  </>
  );
 }
}

export default TalentsList;
