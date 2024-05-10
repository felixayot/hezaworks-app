/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { ErrorButton, PageError, PageErrorButton, PageLoading, PageLoadingWrapper, PageSuccess, PageSuccessLink } from "../styles/PageLoading.styles";
import { TPLink } from "../styles/ViewTalentProfile.styles";

function DeleteJobPost() {
    const axiosPrivate = useAxiosPrivate();
    const { id } = useParams();

    const [deletejob, setDeleteJob] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks | Delete a Job Post';

        axiosPrivate.delete(`/jobs/posts/job/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false,
        })
            .then((response) => {
                setDeleteJob(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (!err?.response) {
                    setError("No response from server");
                } else if (err?.response?.status === 403) {
                    setError("403");
                } else {
                    setError("Failed to complete action. Please try again later");
                }
                });
    }, []);

    const navigate = useNavigate()
    const handleRedirect = () => navigate(-1)

if (error === "403") {
        return (
            <PageLoadingWrapper>
                <PageError>Action prohibited. This job post has applications. You can move it to drafts instead</PageError><br />
                <PageErrorButton onClick={handleRedirect}>Go back</PageErrorButton>
            </PageLoadingWrapper>
        )
    } else if (error) {
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
        <PageSuccess>Job Reference ID {id} has been permanently deleted successfully.
        <PageErrorButton onClick={handleRedirect}>Go back</PageErrorButton>
        </PageSuccess>
    </PageLoadingWrapper>
  )
}

export default DeleteJobPost
