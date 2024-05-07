/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper } from "../styles/PageLoading.styles";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import {
  JobpostAttribute,
  JobpostButton,
  JobpostContainer,
  JobpostLink,
  JobpostTitle,
  Title
} from "../styles/Jobpost.styles";
import Modal from "./Modal";

function ViewSingleUserPost() {
  const axiosPrivate = useAxiosPrivate();
  const [Jobpost, setJobpost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "HezaWorks - My Job Posts";
    axiosPrivate.get(`jobs/user/myposts/${id}`, {
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
        } else {
          setError("Failed to fetch data.");
        }
      });
  }, [axiosPrivate]);

  if (error) {
    return <PageLoadingWrapper>
      <PageError>{error}</PageError><br />
      <PageErrorButton onClick={() => window.location.reload()}>Try again</PageErrorButton>
      </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
      <PageLoading>Loading...</PageLoading>
      </PageLoadingWrapper>
  } else {
    return (
      <>
      <Title>Job Post Reference Number {Jobpost.id}</Title>
      <JobpostContainer>
        <JobpostTitle>{Jobpost.title}</JobpostTitle>
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
        <JobpostButton><JobpostLink to={`/user/jobs/${Jobpost.id}/update`}>Update this Post</JobpostLink></JobpostButton>
        <JobpostButton><JobpostLink to={`/user/jobs/${Jobpost.id}/applications`}>View Applicants for this job</JobpostLink></JobpostButton>
        <JobpostButton onClick={() => {setDeleteModal(true)}}>Delete this Post</JobpostButton>
        {deleteModal && <Modal setOpenModal={setDeleteModal} BodySubject="This job post will be deleted permanently"
        handleContinue={() => navigate(`/user/jobs/${Jobpost.id}/delete`)}/>}
      </JobpostContainer>
    </>
  )
  }
}

export default ViewSingleUserPost;
