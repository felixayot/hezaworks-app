import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAxiosPrivate from '../hooks/UseAxiosPrivate'
import { PageError, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles'
import { ApplicationAttribute, ApplicationContainer, ApplicationHeader, ApplicationTitle, ApplicationWrapper } from '../styles/Application.styles'
import { JobpostButton, JobpostLink } from '../styles/Jobpost.styles'

function ViewSingleApplication() {
    const axiosPrivate = useAxiosPrivate()
    const { id } = useParams()

    const [ application, setApplication ] = useState('')
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState('')

    useEffect(() => {
        document.title = 'HezaWorks - Manage Application'
        axiosPrivate.get(`/jobs/user/applications/${id}`)
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
    <ApplicationHeader>Viewing Application</ApplicationHeader>
    <ApplicationContainer>
        {/* <ApplicationWrapper> */}
        <ApplicationAttribute><ApplicationTitle>Application Reference</ApplicationTitle>{application.application_id}</ApplicationAttribute>
        <ApplicationAttribute><ApplicationTitle>Job Reference Number</ApplicationTitle>{application.job_id}</ApplicationAttribute>
        <ApplicationAttribute><ApplicationTitle>Job Application Title</ApplicationTitle>{application.job_title}</ApplicationAttribute>
        <ApplicationAttribute><ApplicationTitle>My Email address</ApplicationTitle>{application.applicant}</ApplicationAttribute>
       <ApplicationAttribute><ApplicationTitle>Application Status</ApplicationTitle>{application.status}</ApplicationAttribute>
        <ApplicationAttribute><ApplicationTitle>Application date</ApplicationTitle>{application.applied_at}</ApplicationAttribute>
        <JobpostButton><JobpostLink to="#">Withdraw this application</JobpostLink></JobpostButton>
        {/* </ApplicationWrapper> */}
    </ApplicationContainer>
    </>
  )
}

export default ViewSingleApplication
