/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/UseAxiosPrivate";
import { ErrorButton, PageError, PageErrorButton, PageLoading, PageLoadingWrapper, PageSuccess, PageSuccessLink } from "../styles/PageLoading.styles";
import { TPLink } from "../styles/ViewTalentProfile.styles";

function MakeAdmin() {
    const axiosPrivate = useAxiosPrivate();
    const { id } = useParams();

    const [admin, setAdmin] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = 'HezaWorks | Create New Admin';

        axiosPrivate.put(`/auth/users/newadmin/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: false,
        })
            .then((response) => {
                setAdmin(response.data);
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
        <PageSuccess>Admin roles have been successfully granted to user ID {id}<PageSuccessLink to={`/adminpanel/admins/${id}`}>Go back.</PageSuccessLink>
        </PageSuccess>
    </PageLoadingWrapper>
  )
}

export default MakeAdmin
