import { useState } from "react";
import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
} from "../styles/Jobpost.styles";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const SEARCH_URL = "/jobs/posts/search";
let Results = [];

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("search", search);
    axiosInstance
      .post(SEARCH_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      })
      .then((response) => {
        // console.log(response.data);
        // Results = response.data;
        setResults(response.data);
        navigate("/jobs/searchresults");
      })
      .catch((err) => {
        if (!err?.response) {
          setError("No response from server");
        } else {
          setError("Failed to fetch data");
        }
      });
  };

  Results = results;
  console.log(Results);

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

export default SearchBar;
export { Results };