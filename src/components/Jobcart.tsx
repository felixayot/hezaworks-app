import { useState, useEffect } from 'react';
import { JobpostContainer, JobpostTitle, JobpostAttribute, JobpostButton, JobpostLink } from "../styles/Jobpost.styles";

function Jobcart() {
    const [cartposts, setCartposts] = useState<{ id: number; title: string; organization: string; description: string; requirements: string; posted_at: string; expires_on: string; }[]>([]);

    useEffect(() => {
      document.title = 'HezaWorks - Job Cart';
      setCartposts([
        {
          "id": 1,
          "title": "Software Engineer",
          "organization": "Google",
          "description": "Develop software applications",
          "requirements": "3 years experience",
          "posted_at": "2021-12-01",
          "expires_on": "2022-12-01"
        }
      ]);
    }, []);
  return (
    cartposts.map((post) => (
        <JobpostContainer key={post.id}>
        <JobpostTitle>{post.title}</JobpostTitle>
        <JobpostAttribute>
          <h2>Organization</h2>
          {post.organization}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Description</h2>
          {post.description}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Requirements</h2>
          {post.requirements}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Date Posted</h2>
          {post.posted_at}
        </JobpostAttribute>
        <JobpostAttribute>
          <h2>Job Expires On</h2>
          {post.expires_on}
        </JobpostAttribute>
        <JobpostLink to={`/jobs/job/${post.id}/apply`}>Apply Now</JobpostLink>
        </JobpostContainer>
  )
));
}

export default Jobcart
