/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { useNavigate, useParams } from 'react-router-dom';
import {
    JobFormContainer,
    JobForm,
    JobFormTitle,
    JobFormInput,
    JobFormText,
    JobFormButton,
    JobFormLongInput,
    JobFormWrapper,
} from '../styles/JobpostForm.styles';
import { PageError, PageErrorButton, PageLoadingWrapper, PageSuccess } from '../styles/PageLoading.styles';

function EditJobpost() {
    const { id } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirements, setJobRequirements] = useState('')
    const [jobpostexpireson, setJobpostexpireson] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');

    useEffect(() => {
      axiosPrivate.get(`/jobs/posts/job/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        })
          .then((response) => {
              setJobTitle(response.data.title);
              setJobDescription(response.data.description);
              setJobRequirements(response.data.requirements);
              setJobpostexpireson(response.data.expires_on);
          })
          .catch((err) => {
            if (!err?.response) {
              setError('No response from server');
            } else {
              setError(`Failed to fetch data ${err?.response?.data?.message}`);
            }
          });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        axiosPrivate.put(`/jobs/posts/job/${id}`, {
            title: jobTitle,
            description: jobDescription,
            requirements: jobRequirements,
            expires_on: jobpostexpireson,
        })
        .then((response) => {
          setSuccess(`Post Reference Number ${response.data.id} updated successfully`);
        })
        .catch((err) => {
            if (!err?.response) {
                setError('No response from server');
            } else {
                setError('Failed to update post');
            }
        });
    }

    const navigate = useNavigate()
    const handleRedirect = () => navigate(-1)

    if (error) {
        return <PageLoadingWrapper>
        <PageError>{error}</PageError><br />
        <PageErrorButton onClick={() => window.location.reload()}>Try again</PageErrorButton>
        </PageLoadingWrapper>
    }

    if (success) {
        return <PageLoadingWrapper>
        <PageSuccess>{success}</PageSuccess><br />
        <PageErrorButton onClick={handleRedirect}>Go back to all jobs</PageErrorButton>
        </PageLoadingWrapper>
    }

  return (
    <JobFormContainer>
        <JobFormWrapper>
        <JobFormTitle>Update this post</JobFormTitle>
        <JobForm>
            <JobFormInput
            type="text"
            required
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            />
            <JobFormLongInput
            type="text"
            required
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            />
            <JobFormLongInput
            type="text"
            required
            value={jobRequirements}
            onChange={(e) => setJobRequirements(e.target.value)}
            />
            <JobFormText>Job application expires on:
            <JobFormInput
            type="date"
            required
            value={jobpostexpireson}
            onChange={(e) => setJobpostexpireson(e.target.value)}
            />
            </JobFormText>
            <JobFormButton type="submit" onClick={handleSubmit}>Submit Changes</JobFormButton>
        </JobForm>
        </JobFormWrapper>
    </JobFormContainer>
  )
}

export default EditJobpost
