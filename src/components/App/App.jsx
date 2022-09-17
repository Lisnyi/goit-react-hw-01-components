import user from "data/user"
import data from "data/data"
import friends from "data/friends"
import transactions from "data/transactions"
import { Box } from "common/Box.jsx"
import { Statistics } from "components/Statistics/Statistics.jsx"
import { FriendList } from "components/FriendList/FriendList.jsx"
import { Profile } from "components/Profile/Profile.jsx"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory.jsx"

export const App = () => {
  return (
    <Box as='main' p={5} width='100'>
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
    </Box>
  );
};