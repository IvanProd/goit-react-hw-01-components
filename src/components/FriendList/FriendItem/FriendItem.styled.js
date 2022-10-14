import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 8px 8px 0 0;
  background-color: #c2c2c2;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendPhoto = styled.img`
  width: 60px;
  margin-right: 15px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
