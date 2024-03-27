import { useState } from 'react';
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

function EditJobpost() {
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirements, setJobRequirements] = useState('')
    const [jobpostexpireson, setJobpostexpireson] = useState('')

    async function handleSubmit() {
        const item = { jobTitle, jobDescription, jobRequirements, jobpostexpireson }
        
        await fetch('http://localhost:5000/jobs/posts', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    }
  return (
    <JobFormContainer>
        <JobFormWrapper>
        <JobFormTitle>Update this post</JobFormTitle>
        <JobForm>
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
            <JobFormButton type="submit" onClick={handleSubmit}>Submit Changes</JobFormButton>
        </JobForm>
        </JobFormWrapper>
    </JobFormContainer>
  )
}

export default EditJobpost
