import { FriendList, Profile, Statistics, TransactionHistory } from "components";
import { Box } from "common";
import user from "data/user"
import data from "data/data"
import friends from "data/friends"
import transactions from "data/transactions"

export const App = () => {
  return (
    <Box as='main' display='flex' alignItems='center' flexDirection='column' p={5}>
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