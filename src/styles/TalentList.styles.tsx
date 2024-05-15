import styled from "styled-components";
import { Link } from "react-router-dom";

export const TalentListContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  padding: 5px 20px;
  border-radius: 10px;
  height: auto;
  background-color: #f5f5f5;

`;

export const Title = styled.h1`
  margin: 20px;
  color: #27005D;
`;

export const TalentListTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const TalentListAttribute = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const TalentListLink = styled(Link)`
    text-decoration: none;
    /* width: 23.5%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #27005D;
     */
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #F6921E;
        transition: 200ms ease-out;
    }
    `;

export const TPButton = styled.button`
  width: 50%;
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

export const TLCard = styled.article`
  display: grid;
  grid-template-columns: 80px auto 100px;
  grid-template-rows: 35px 10px 35px;
  margin-left: 60px;
  position: relative;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  padding: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 5px auto;
    grid-template-rows: 35px 40px auto 40px;
    width: 80%;
    padding: 20px;
    margin: 10px;
  }
`;

export const TLName = styled.p`
  text-decoration: none;
  grid-area: 1 / 2 / 2 / 3;
  font-size: 16px;
  align-self: start;
  font-weight: 500;
  margin-top: 5px;
  padding: 0 24px;
  `;

export const TLTitle = styled.p`
  grid-area: 2 / 2 / 3 / 3;
  align-self: center;
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
  padding: 0 24px;

  @media (max-width: 768px) {
    grid-area: 2 / 2 / 3 / 2;
    padding: 0 16px;
  }
`;

export const TLButton = styled.button`
  grid-area: 1 / 8 / 2 / 8;
  display: block;
  /* width: 100%; */
  cursor: pointer;
  border: none;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 6px 12px;
  z-index: 2;
  background-color: #27005D;
  color: #fff;

  @media (max-width: 768px) {
    grid-area: 6 / 3 / 3 / 2;
    display: flex;
    margin-right: 50px;
  }
  `;
