import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { PageError, PageLoading, PageLoadingWrapper } from '../styles/PageLoading.styles';

const JOBAPPLICANTS_URL = '/jobs/posts/job/{id}/applicants';
function JobApplicants() {
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(JOBAPPLICANTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
        .then((response) => {
            setApplicants(response.data);
            setIsLoading(false);
        })
        .catch((err) => {
          if (!err?.response) {
            setError('No response from server');
          } else if (err?.response?.data === undefined) {
            setError('No applications received yet');
          } else {
            setError(`Failed to fetch data ${err?.response?.data?.message}`);
          }
        });
  }, []);

  if (error) {
    return <PageLoadingWrapper>
    <PageError>Loading...</PageError>
    </PageLoadingWrapper>
  } else if (isLoading) {
    return <PageLoadingWrapper>
      <PageLoading>Loading...</PageLoading>
      </PageLoadingWrapper>
  }

  return (
    <>
    <h2>Received Applications from Talent</h2>
    <table>
        <thead>
            <tr>
                <th>Application ID</th>
                <th>Job ID</th>
                <th>Applicant ID</th>
                <th>Application Status</th>
                <th>Date Applied</th>
            </tr>
        </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr>
                    <td>applicant.id</td>
                    <td>applicant.job_id</td>
                    <td>applicant.user_id</td>
                    <td>applicant.status</td>
                    <td>applicant.applied_at</td>
                </tr>
              ))}
            </tbody>
    </table>
  </>
  )
}

export default JobApplicants
