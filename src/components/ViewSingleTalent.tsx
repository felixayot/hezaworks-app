/* eslint-disable */
// @t/s-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  PageError,
  PageErrorButton,
  PageLoading,
  PageLoadingWrapper,
} from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import {
  TPButton,
  TalentListAttribute,
  TalentListContainer,
  TalentListLink,
  TalentListTitle,
} from "../styles/TalentList.styles";
import { Title } from "../styles/Jobpost.styles";
import { TPatag, VTPButton } from "../styles/ViewTalentProfile.styles";

function ViewSingleTalent() {
  const axiosPrivate = useAxiosPrivate();
  const [talent, setTalent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks - View a Talent";
    axiosPrivate
      .get(`/auth/users/talentlist/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
      .then((response) => {
        setTalent(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!err?.response) {
          setError("No response from server");
        } else if (err.response?.status === 401) {
          setError(
            "Your account is inactive. Please contact the administrator."
          );
        }
      });
  }, [axiosPrivate]);

  if (error) {
    return (
      <PageLoadingWrapper>
        <PageError>{error}</PageError>
        <PageErrorButton onClick={() => window.location.reload()}>
          Try again
        </PageErrorButton>
      </PageLoadingWrapper>
    );
  } else if (isLoading) {
    return (
      <PageLoadingWrapper>
        <PageLoading>Loading...</PageLoading>
      </PageLoadingWrapper>
    );
  } else {
    return (
      <>
        <Title>View Talent</Title>
        <TalentListContainer>
          <TalentListAttribute>
            <TalentListTitle>Talent Name</TalentListTitle>
            {talent.name}
          </TalentListAttribute>
          <TalentListAttribute>
            <h3>Resume</h3>
            <TPatag
              href={`http://localhost:5000/main/cv/${talent.resume}`}
              target="_blank"
            >
              {talent.resume}
            </TPatag>
          </TalentListAttribute>
          {/* <TalentListTitle>Resume</TalentListTitle>
          <TalentListLink to="#">{talent.resume}</TalentListLink>
          </TalentListAttribute> */}
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
            <TalentListTitle>
              Roles Performed at Former or Current Job
            </TalentListTitle>
            {talent.responsibilities}
          </TalentListAttribute>
          <VTPButton onClick={() => {navigate(-1)}}>Go Back</VTPButton>
        </TalentListContainer>
      </>
    );
  }
}

export default ViewSingleTalent;
