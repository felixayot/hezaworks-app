/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { PageError, PageErrorButton, PageLoading, PageLoadingWrapper, PageSuccess, PageSuccessLink } from "../styles/PageLoading.styles";

function ApplyJob() {
    const axiosPrivate = useAxiosPrivate();
    const { id } = useParams();

    const [application, setApplication] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks - Apply Job';

        axiosPrivate.post(`/jobs/posts/job/${id}/apply`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false,
        })
            .then((response) => {
                setApplication(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (!err?.response) {
                    setError("No response from server");
                } else if (err.response.status === 400) {
                    setError("Application submitted successfully.");
                } else if (err.response.status === 401) {
                    setError("Please activate your account to apply for jobs.");
                } else {
                    setError("Failed to apply for job. Please try again later");
                }
                });
    }, []);

    const navigate = useNavigate()
    const handleRedirect = () => navigate(-1)

    if (error) {
        return (
            <PageLoadingWrapper>
                <PageError>{error}</PageError><br />
                <PageErrorButton onClick={handleRedirect}>Go back</PageErrorButton>
            </PageLoadingWrapper>
        )
    } else if (isLoading) {
        return (
            <PageLoadingWrapper>
                <PageLoading>Submitting...</PageLoading>
            </PageLoadingWrapper>
        )
    }

  return (
    <PageLoadingWrapper>
        <PageSuccess>Application submitted successfully with reference number {application.application_id}. View more details in <PageSuccessLink to="/user/myapplications">My Applications.</PageSuccessLink>
        </PageSuccess>
    </PageLoadingWrapper>
  )
}

export default ApplyJob
