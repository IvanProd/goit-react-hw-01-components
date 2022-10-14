import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  overflow: hidden;
  width: 320px;
  border-radius: 8px 8px 0 0;
`;

export const TableHead = styled.th`
  width: calc(100% / 3);
  padding: 10px;
  background-color: #18b0ff;
  margin: 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const TableData = styled.td`
  width: calc(100% / 3);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
