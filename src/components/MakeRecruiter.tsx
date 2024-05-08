/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { ErrorButton, PageError, PageErrorButton, PageLoading, PageLoadingWrapper, PageSuccess, PageSuccessLink } from "../styles/PageLoading.styles";
import { TPLink } from "../styles/ViewTalentProfile.styles";

function MakeRecruiter() {
    const axiosPrivate = useAxiosPrivate();
    const { id } = useParams();

    const [recruiter, setRecruiter] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks - Create New Recruiter';

        axiosPrivate.put(`/auth/users/newrecruiter/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false,
        })
            .then((response) => {
                setRecruiter(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (!err?.response) {
                    setError("No response from server");
                } else {
                    setError("Failed to complete action. Please try again later");
                }
                });
    }, []);

    const navigate = useNavigate()
    const handleRedirect = () => navigate(-1)

// if (error) {
//         return (
//             <PageLoadingWrapper>
//                 <PageError>{error}</PageError><br />
//                 <PageErrorButton onClick={handleRedirect}>Go back</PageErrorButton>
//             </PageLoadingWrapper>
//         )
//     } else
if (isLoading) {
        return (
            <PageLoadingWrapper>
                <PageLoading>Submitting...</PageLoading>
            </PageLoadingWrapper>
        )
    }

  return (
    <PageLoadingWrapper>
        <PageSuccess>Recruiter roles have been successfully granted to user ID {id}
        <PageSuccessLink to={`/adminpanel/recruiters/${id}`}>Go back.</PageSuccessLink>
        </PageSuccess>
    </PageLoadingWrapper>
  )
}

export default MakeRecruiter
