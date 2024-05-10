import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  margin: 10px;
  overflow-x: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #F6921E;
  }
`;

export const TableTitle = styled.h2`
    margin: 20px;    
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 20px 20px;

  @media (max-width: 768px) {
    width: 50%;
    margin: 5px;
  }
`;

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

export const TableBody = styled.tbody`
  background-color: #fff;

`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const TableButton = styled.button`
  padding: 10px 20px;
  background-color: #27005D;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #F6921E;
  }
`;
