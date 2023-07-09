import { Profile } from "./profile/Profile.jsx";
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics.jsx';
import data from './statistics/data.json';
import { FriendList } from './friends/FriendList.jsx';
import friends from './friends/friends.json';
import { TransactionHistory } from "./transactions/TransactionHistory.jsx";
import items from './transactions/transactions.json';

export const App = () => {
 return (
    <>
    <Profile
         user={user}  
    />
     <Statistics
      title="Upload stats"
      stats={data}
     />
      <FriendList
        friends={friends}
     />  
     <TransactionHistory
       items={items}
     />
    </>  
  );
};
