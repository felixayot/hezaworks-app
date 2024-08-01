/* eslint-disable */
// @ts-nocheck

import { useState } from "react";
import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
} from "../styles/Jobpost.styles";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";
import useJobsearch from "../hooks/useJobsearch";
import RealJobs, { searchJobs } from "../api/realJobs.js";

function Search() {
  const [search, setSearch] = useState("");
  const { setResults } = useJobsearch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("search", search);
    const query = formData.get("search");

    // try {
    //   const response = await axiosInstance.post(SEARCH_URL, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     withCredentials: false,
    //   });
      setResults(await searchJobs(RealJobs, query));
      navigate("/jobs/searchresults");
      console.log(await searchJobs(RealJobs, query));
    // } catch (err) {
    //   if (!err?.response) {
    //     setError("No response from server");
    //   } else {
    //     setError("Failed to fetch data");
    //   }
    // }
  };

  return (
    <>
      <SearchForm>
        <SearchLabel htmlFor="search">Search for jobs</SearchLabel>
        <SearchInput
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          placeholder="Enter a job title keyword e.g Engineer"
        />
        <SearchButton onClick={handleSubmit}>Search</SearchButton>
      </SearchForm>
    </>
  );
}

export default Search;
