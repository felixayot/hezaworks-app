function JobsList() {
    //<JobpostContainer element={ isLoading && <div>Loading...</div>} />
    return ({})
Jobposts && Jobposts.map((post) => (
        return (
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
          <JobpostButton onClick={handleApply}>Apply Now</JobpostButton>
          <JobpostButton onClick={handleAddToCart}>
            Add to Job cart
          </JobpostButton>
        </JobpostContainer>
      );
    ))
}

export default JobsList