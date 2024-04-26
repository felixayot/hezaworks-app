import styled from 'styled-components'

export const Title = styled.h1`
 margin: 2rem;
 text-align: center;
`;

export const ApplicationStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const ApplicationStatusForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const ApplicationStatusLabel = styled.label`
  margin: 1rem;
  font-size: 1.5rem;
  `;

export const ApplicationStatusSelect = styled.select`
  margin: 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
`;

export const ApplicationStatusOption = styled.option`
    margin: 1rem;
`;

export const ApplicationStatusButton = styled.button`
    margin: 1rem;
    padding: 0.5rem;
    border: none;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: #27005D;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #F6921E;
    }
`;
