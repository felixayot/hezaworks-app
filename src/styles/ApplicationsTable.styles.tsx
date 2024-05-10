import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vw;
  overflow-x: auto;

  @media (max-width: 768px) {
    align-items: left;
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
    border-collapse: none;
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
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
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
