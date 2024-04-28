/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosPrivate from '../hooks/UseAxiosPrivate'
import { PageError, PageErrorButton, PageLoadingWrapper, PageSuccess, PageSuccessLink } from '../styles/PageLoading.styles'
import { ApplicationStatusButton, ApplicationStatusContainer, ApplicationStatusForm, ApplicationStatusLabel, ApplicationStatusOption, ApplicationStatusSelect, Title } from '../styles/ApplicationStatus.styles'

function UpdateApplicationStatus() {
    const axiosPrivate = useAxiosPrivate()
    const { id } = useParams()

    const [ status, setStatus ] = useState('')
    const [ success, setSuccess ] = useState('')
    const [ error, setError ] = useState('')

    useEffect(() => {
        document.title = 'HezaWorks - Update Application Status'
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(status)
        try {
            const response = await axiosPrivate.put(`/jobs/user/applicants/${id}`,
        JSON.stringify({
            status
        })
        )
        console.log(response)
        setSuccess('Application status updated successfully')
        } catch (err) {
            setError('Failed to update application status. Please try again later.')
        }
    }

    if (error) {
        return <PageLoadingWrapper>
            <PageError>{ error }</PageError>
        </PageLoadingWrapper>
    } else if (success) {
        return <PageLoadingWrapper>
            <PageSuccess>{ success }</PageSuccess>
            <PageErrorButton>
                <PageSuccessLink style={{ color: 'white'}} to="/user/applications">Go back</PageSuccessLink>
            </PageErrorButton>
        </PageLoadingWrapper>
    }

  return (
    <>
    <Title>Update Application Status</Title>
    <ApplicationStatusContainer>
    <ApplicationStatusForm onSubmit={handleSubmit}>
        <ApplicationStatusLabel htmlFor="status">Select status to assign</ApplicationStatusLabel>
        <ApplicationStatusSelect id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <ApplicationStatusOption value="In Progress">In Progress</ApplicationStatusOption>
            <ApplicationStatusOption value="Accepted">Accepted</ApplicationStatusOption>
            <ApplicationStatusOption value="Rejected">Rejected</ApplicationStatusOption>
        </ApplicationStatusSelect>
        <ApplicationStatusButton type="submit">Update Status</ApplicationStatusButton>
    </ApplicationStatusForm>
    </ApplicationStatusContainer>
    </>
  )
}

export default UpdateApplicationStatus
