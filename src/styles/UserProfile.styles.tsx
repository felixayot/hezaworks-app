import styled from "styled-components";
import { Link } from 'react-router-dom';

export const UserProfileContainer = styled.div`
  display: flex;
  /* margin: 20px; */
  flex-shrink: 15%;
  flex-direction: column;
  /* gap: 10vw; */
  align-items: center;
  justify-content: center;
  height: 100%;
  `;

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // gap: 20vh;
  margin-bottom: 10vh;
  align-items: center;
  justify-content: center;
  padding: 5vw;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const UserProfileTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 30vw;
`;

export const UserProfileInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const UserProfileButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #27005D;
  color: #fff;
  cursor: pointer;
`;

export const UserProfileText = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const UserProfileLink = styled(Link)`
  margin-top: 10px;
  color: #333;
`;

export const UserProfileTextArea = styled.textarea`
  width: 100%;
  height: 25vh;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const UserProfileSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const UserProfileOption = styled.option`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
