import PropTypes from 'prop-types'
import { Box } from '../../common/Box.jsx';
import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
import { FriendsBlock, FriendsBlockItem } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <Box as='section' py={5}>
            <FriendsBlock>
                {friends.map(({id, isOnline, avatar, name}) => (
                    <FriendsBlockItem key={id}>
                        <FriendListItem isOnline={isOnline} avatar={avatar} name={name}></FriendListItem>
                    </FriendsBlockItem>
                ))}
            </FriendsBlock>
        </Box>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}