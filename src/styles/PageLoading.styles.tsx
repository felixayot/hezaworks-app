import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageLoadingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const PageLoading = styled.section`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const PageError = styled.section`
  font-size: 24px;
  font-weight: bold;
  color: #F6921E;
`;

export const PageSuccess = styled.section`
  font-size: 24px;
  font-weight: bold;
  color: green;
`;

export const PageSuccessLink = styled(Link)`
  text-decoration: none;
  color: #27005D;

  &:hover {
    color: #F6921E;
  }
`;

export const PageErrorButton = styled.button`
  padding: 10px 20px;
  background-color: #27005D;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #F6921E;
  }
`;
