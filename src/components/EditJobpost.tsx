import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/UseAxiosPrivate';
import { useParams } from 'react-router-dom';
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
    const { id } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirements, setJobRequirements] = useState('')
    const [jobpostexpireson, setJobpostexpireson] = useState('')
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axiosPrivate.put(`/jobs/posts/job/${id}`, {
            title: jobTitle,
            description: jobDescription,
            requirements: jobRequirements,
            expireson: jobpostexpireson,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            if (!err?.response) {
                setError('No response from server');
            } else {
                setError(`Failed to fetch data ${err?.response?.data?.message}`);
            }
        });
    }

    useEffect(() => {
        axiosPrivate.put(`/jobs/posts/job/${id}`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: false,
          })
            .then((response) => {
                setJobTitle(response.data.title);
                setJobDescription(response.data.description);
                setJobRequirements(response.data.requirements);
                setJobpostexpireson(response.data.expireson);
            })
            .catch((err) => {
              if (!err?.response) {
                setError('No response from server');
              } else {
                setError(`Failed to fetch data ${err?.response?.data?.message}`);
              }
            });
      }, [axiosPrivate, id]);

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
