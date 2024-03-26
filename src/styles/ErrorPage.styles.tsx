import styled from "styled-components";

export const ErrorpageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const ErrorpageTitle = styled.h2`
  color: #333;
  font-size: 3rem;
`;

export const ErrorpageText = styled.p`
  color: #333;
  font-size: 1.5rem;
`;

export const ErrorpageButton = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  background-color: #0795ff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #F6921E;
  }
`;
