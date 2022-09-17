import PropTypes from 'prop-types';
import { FriendsBlockItem, Chip, FriendAvatar, FriendName } from "components"

export const FriendListItem = ({friends}) => {
    return friends.map(({id, isOnline, avatar, name}) => (
        <FriendsBlockItem key={id}>
            <Chip isOnline={isOnline}></Chip>
            <FriendAvatar src={avatar} alt="User avatar"/>
            <FriendName>{name}</FriendName>
        </FriendsBlockItem>
    ))
  };

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}