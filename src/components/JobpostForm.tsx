/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { PageError, PageSuccess, PageLoadingWrapper, PageSuccessLink } from "../styles/PageLoading.styles";
import useAxiosPrivate from '../hooks/UseAxiosPrivate';

const POST_URL = '/jobs/posts'
function JobpostForm() {

    useEffect(() => {
        document.title = 'HezaWorks | Post a Job'
      }
      , [])

    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/user/jobs'

    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirements, setJobRequirements] = useState('')
    const [jobpostexpireson, setJobpostexpireson] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const item = JSON.stringify({
            title:jobTitle,
            description: jobDescription,
            requirements: jobRequirements,
            expires_on: jobpostexpireson
        })
        console.log(item)
        try {
            const response = await axiosPrivate.post(POST_URL,
                item,
                {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: false
            })
            console.log(JSON.stringify(response?.data))
            setJobTitle('')
            setJobDescription('')
            setJobRequirements('')
            setJobpostexpireson('')
            // navigate(from, { replace: true })
            setSuccess('Jobpost created successfully')
        } catch (err) {
            if(!err?.response) {
                setError('No response from server')
            } else if(err?.response?.status === 400) {
                setError('Invalid expiry date. Please input a future date.')
            } else if(err?.response?.status === 401) {
                setError('Account not authorized to create job posts. Please contact the administrator.')
            } else {
                setError('Jobpost creation failed. Please try again later.')
            }
        }
    }
    if (error) {
        return <PageLoadingWrapper>
        <PageError>{error}</PageError>
        </PageLoadingWrapper>
      } else if (success) {
        return <PageLoadingWrapper>
        <PageSuccess>Job post created successfully! Go to
            <PageSuccessLink to="/user/posts"> My Posts</PageSuccessLink>
        </PageSuccess>
        </PageLoadingWrapper>
      }
      

  return (
    <JobFormContainer>
        <JobFormWrapper>
        <JobFormTitle>Post a Job</JobFormTitle>
        <JobForm onSubmit={handleSubmit}>
            <JobFormInput
            type="text"
            required
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            />
            <JobFormLongInput
            type="text"
            required
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            />
            <JobFormLongInput
            type="text"
            required
            placeholder="Job Requirements"
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
            <JobFormButton type="submit">Submit</JobFormButton>
        </JobForm>
        </JobFormWrapper>
    </JobFormContainer>
  )
}

export default JobpostForm;
