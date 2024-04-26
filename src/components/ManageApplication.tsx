import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosPrivate from '../hooks/UseAxiosPrivate'
import { PageError, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles'
import { ApplicationAttribute, ApplicationContainer, ApplicationHeader, ApplicationLink, ApplicationTitle } from '../styles/Application.styles'
import { JobpostButton, JobpostLink } from '../styles/Jobpost.styles'

function ManageApplication() {
    const axiosPrivate = useAxiosPrivate()
    const { id } = useParams()

    const [ application, setApplication ] = useState('')
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState('')

    useEffect(() => {
        document.title = 'HezaWorks - Manage Application'
        axiosPrivate.get(`/jobs/user/applicants/${id}`)
        .then((response) => {
            setApplication(response.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setError('Failed to fetch data. Try again later')
        })
    }, [])

    if (error) {
        return <PageLoadingWrapper>
            <PageError>{error}</PageError>
            </PageLoadingWrapper>
    } else if (isLoading) {
        return <PageLoadingWrapper>
            <PageLoading>Loading...</PageLoading>
            </PageLoadingWrapper>
    }

    return application && (
        <>
    <ApplicationHeader>Manage this application</ApplicationHeader>
    <ApplicationContainer>
    <ApplicationAttribute><ApplicationTitle>Application ID</ApplicationTitle>{application.application_id}</ApplicationAttribute>
    <ApplicationAttribute><ApplicationTitle>Job ID</ApplicationTitle>
    {application.job_id}</ApplicationAttribute>
    <ApplicationAttribute><ApplicationTitle>Job Application Title</ApplicationTitle>{application.job_title}</ApplicationAttribute>
    <ApplicationAttribute><ApplicationTitle>Applicant Email</ApplicationTitle>
    <ApplicationLink to={`mailto:${application.applicant}`}>
    {application.applicant}</ApplicationLink></ApplicationAttribute>
    <ApplicationAttribute><ApplicationTitle>Application Status</ApplicationTitle>{application.status}</ApplicationAttribute>
    <ApplicationAttribute><ApplicationTitle>Application date</ApplicationTitle>{application.applied_at}</ApplicationAttribute>
    <JobpostButton><JobpostLink to={`/user/applications/${application.application_id}/updatestatus`}>Update Status</JobpostLink></JobpostButton>
    </ApplicationContainer>
    </>
  )
}

export default ManageApplication
