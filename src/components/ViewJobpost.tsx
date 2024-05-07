/* eslint-disable */
// @t/s-nocheck

import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import {
  PageError,
  PageErrorButton,
  PageLoading,
  PageLoadingWrapper,
} from "../styles/PageLoading.styles";
import { useParams, useNavigate } from "react-router-dom";
import {
  JobpostAttribute,
  JobpostButton,
  JobpostContainer,
  JobpostLink,
  JobpostTitle,
  Title,
} from "../styles/Jobpost.styles";
import Modal from "./Modal";

function ViewJobpost() {
  const [Jobpost, setJobpost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [applyModal, setApplyModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HezaWorks - Job Post";
    axiosInstance
      .get(`/jobs/posts/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
      .then((response) => {
        setJobpost(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!err?.response) {
          setError("No response from server");
        } else if (err?.response?.status === 404) {
          setError("404");
        } else {
          setError("Failed to fetch data");
        }
      });
  }, []);

  if (error === "404") {
    return (
      <PageLoadingWrapper>
        <PageError>No job found for this job reference</PageError>
        <br />
        <PageErrorButton onClick={() => navigate(-1)}>Go back</PageErrorButton>
      </PageLoadingWrapper>
    );
  } else if (error) {
    return (
      <PageLoadingWrapper>
        <PageError>{error}</PageError>
        <br />
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
        <Title>Viewing Job post Reference Number {Jobpost.id}</Title>
        <JobpostContainer>
          <JobpostTitle>{Jobpost.title}</JobpostTitle>
          <JobpostAttribute>
            <h2>Organization</h2>
            {Jobpost.organization}
          </JobpostAttribute>
          <JobpostAttribute>
            <h2>Job Description</h2>
            {Jobpost.description}
          </JobpostAttribute>
          <JobpostAttribute>
            <h2>Job Requirements</h2>
            {Jobpost.requirements}
          </JobpostAttribute>
          <JobpostAttribute>
            <h2>Date Posted</h2>
            {Jobpost.posted_at}
          </JobpostAttribute>
          <JobpostAttribute>
            <h2>Job Expires On</h2>
            {Jobpost.expires_on}
          </JobpostAttribute>
          <JobpostButton
            onClick={() => {
              setApplyModal(true);
            }}
          >
            Apply Now
          </JobpostButton>
          <JobpostButton>
            <JobpostLink to="/user/jobcart">Add to Job cart</JobpostLink>
          </JobpostButton>
        </JobpostContainer>
        {applyModal && (
            <Modal
              setOpenModal={setApplyModal}
              BodySubject="You might want to confirm that your professional profile matches this job's requirements"
              handleContinue={() => {
                navigate(`/jobs/${Jobpost.id}/apply`);
              }}
            />
          )}
      </>
    );
  }
}

export default ViewJobpost;
