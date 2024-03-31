import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const SignUpFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const SignUpFormTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const SignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 30vw;
`;

export const SignUpFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SignUpFormButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #27005D;
  color: #fff;
  cursor: pointer;
`;

export const SignUpFormText = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const SignUpFormLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;

  &:hover {
  color:  #F6921E;
  transition: 200ms ease-out;
    }
`;

export const SignUpFormError = styled.p`
  margin-top: 10px;
  color: #f00;
`;

export const SignUpFormRedirect = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const SignUpFormRedirectLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
`;

export const SignUpFormRedirectText = styled.p`
  margin-top: 10px;
  color: #333;
`;
