import styled from 'styled-components'

export const PgContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const PgButton = styled.button`
  padding: 10px;
  /* font-size: 1rem; */
  background-color: #27005D;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }
`;

export const PgSpan = styled.span`
  font-size: 1rem;
  color: green;
`;