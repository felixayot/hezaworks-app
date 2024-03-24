import styled from "styled-components";

export const JobpostContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  padding: 5px 20px;
  border-radius: 10px;
  height: auto;
  background-color: #f5f5f5;
`;

export const JobpostTitle = styled.h1`
  margin-bottom: 10px;
  color: #333;
`;

export const JobpostAttribute = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const JobpostButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #0795ff;
  color: #fff;
  cursor: pointer;
`;
