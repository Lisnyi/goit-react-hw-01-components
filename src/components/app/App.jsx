import { Profile } from "components/profile/Profile";
import { Statistics } from "components/statistics/Statistics"
import { FriendList } from "components/friend_list/FriendList";
import { TransactionHistory } from "components/transaction_history/TransactionHistory";

import user from "data/user"
import data from "data/data"
import friends from "data/friends"
import transactions from "data/transactions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};