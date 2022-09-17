import PropTypes from 'prop-types'
import { FriendListItem, FriendsBlock } from "components"
import { Box } from 'common';

export const FriendList = ({friends}) => {
    return (
        <Box as='section' py={5}>
            <FriendsBlock>
                <FriendListItem friends={friends}/>
            </FriendsBlock>
        </Box>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}