import user from './path/to/user';
import data from './path/to/data';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import { Fragment } from 'react';

export const App = () => {
  return (
    <>
      <Profile  user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
