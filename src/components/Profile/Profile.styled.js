import styled from 'styled-components';

export const UserCard = styled.div`
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  border: 1px solid black;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  border: 1px solid #363433;
  border-radius: 50%;
  color: rgb(225, 225, 225);
  margin-left: auto;
  margin-right: auto;
`;
export const Description = styled.div`
  padding: 20px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const Tag = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export const Location = styled.p`
  color: rgb(75, 73, 73);
  font-size: 15px;
  text-align: center;
`;
export const Stats = styled.ul`
  background-color: rgb(194, 194, 194);
  display: flex;
  /* justify-content: space-evenly; */
  border-top: 1px solid black;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Label = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(41, 38, 54);
  font-size: 20px;
`;
export const Quantity = styled.span`
  display: block;
  padding-top: 8px;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
`;
export const StatBox = styled.li`
  padding: 10px;
  margin: 0;
  color: rgb(75, 73, 73);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 33%;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
