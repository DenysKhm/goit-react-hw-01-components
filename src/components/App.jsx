import user from '../dataBase/user.json';
import data from '../dataBase/data.json';
import friends from '../dataBase/friends.json';
import transactions from '../dataBase/transactions.json';

import FriendsList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data}/>
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
