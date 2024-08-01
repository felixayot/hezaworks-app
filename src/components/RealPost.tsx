/* eslint-disable */
// @ts-nocheck

import { useState, useEffect } from "react";
import RealJobs, { paginate } from "../api/realJobs.js";
import RealPostsList from "./RealPostsList";
import axiosInstance from "../api/axios";
import {
  PageError,
  PageErrorButton,
  PageLoading,
  PageLoadingWrapper,
} from "../styles/PageLoading.styles";
import { PgButton, PgContainer, PgSpan } from "../styles/Pagination.styles";

function Realposts() {
  const [jobposts, setJobposts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setJobposts(paginate(RealJobs, currentPage, 4));
}, [currentPage]);

  const pageCount = Math.ceil(RealJobs.length / 4);

//   if (error) {
//     return (
//       <PageLoadingWrapper>
//         <PageError>{error}</PageError>
//         <br />
//         <PageErrorButton onClick={() => window.location.reload()}>
//           Try again
//         </PageErrorButton>
//       </PageLoadingWrapper>
//     );
//   } else if (isLoading) {
//     return (
//       <PageLoadingWrapper>
//         <PageLoading>Loading...</PageLoading>
//       </PageLoadingWrapper>
//     );
//   } else {
    return (
      <>
        <RealPostsList posts={jobposts} />
        <PgContainer>
          <PgButton
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PgButton>
          <PgSpan> Page {currentPage} </PgSpan>
          <PgButton
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next
          </PgButton>
        </PgContainer>
      </>
    );
}

export default Realposts;
