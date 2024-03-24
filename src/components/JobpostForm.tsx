import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios'
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
import { SignUpFormError } from '../styles/SignUpFormStyles';

const POST_URL = '/jobs/posts'
function JobpostForm() {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/jobs'

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
            const response = await axios.post(POST_URL,
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
            navigate(from, { replace: true })
            setSuccess('Jobpost created successfully')
            window.alert(success)
        } catch (err) {
            if(!err?.response) {
                setError('No response from server')
                window.alert(error)
            } else if(err?.response?.status === 400) {
                setError('Missing job post details')
                window.alert(error)
            } else if(err?.response?.status === 401) {
                setError('Unauthorized access')
                window.alert(error)
            } else {
                setError('Jobpost creation failed. Please try again later.')
                window.alert(error)
            }
        }
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

export default JobpostForm
