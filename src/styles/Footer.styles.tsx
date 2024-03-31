import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    padding: 60px 80px;
    background-color:  #27005D;
    `;

export const Wrapper = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    `;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    `;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    `;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 10px;
  font-size: 18px;

  &:hover {
  color:  #0795FF;
  transition: 200ms ease-out;
    }
    `;

export const Title = styled.p`
    color: #F6921E;
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: bold;

    // &:hover {
    //     color: #0795ff; #ff9c00 #F6921E
    //     transition: 200ms ease-out;
    `;

