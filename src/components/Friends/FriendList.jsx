import PropTypes from 'prop-types'
import { Box } from '../../common/Box.jsx';
import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
import { FriendsBlock } from './FriendList.styled';

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