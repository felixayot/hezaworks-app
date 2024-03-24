import styled from "styled-components";

export const JobFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 20px;
    padding: 5px 20px;
    border-radius: 10px;
    height: auto;
    background-color: #f5f5f5;
    `;

export const JobFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const JobFormTitle = styled.h1`
    margin-bottom: 10px;
    color: #333;
    `;

export const JobForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 20px;
    width: 30vw;
    `;

export const JobFormInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    `;

export const JobFormLongInput = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    `;

export const JobFormButton = styled.button`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #0795ff;
    color: #fff;
    cursor: pointer;
    `;

export const JobFormText = styled.p`
    margin-top: 10px;
    color: #333;
    `;
