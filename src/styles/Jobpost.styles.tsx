import { Link } from "react-router-dom";
import styled from "styled-components";

export const JobpostContainer = styled.article`
  display: flex;
  flex-direction: column;
  flex-shrink: 10%;
  align-items: left;
  margin: 20px;
  padding: 0 20px;
  border-radius: 10px;
  height: auto;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  margin: 20px;
  color: #27005D;
`;

export const JobpostTitle = styled.h2`
  margin-bottom: 1px;
  color: #333;
`;

export const JobpostAttribute = styled.p`
  margin-top: 0;
  color: #333;
`;

export const JobpostButton = styled.button`
  width: 25%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #27005D;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
        width: 100%;
      }
`;

export const JobpostLink = styled(Link)`
  text-decoration: none;
  /* width: 23.5%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #27005D; */
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #F6921E;
    transition: 200ms ease-out;
  }
`;
