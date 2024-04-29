import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5vw;
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
