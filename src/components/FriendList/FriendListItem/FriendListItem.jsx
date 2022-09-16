import PropTypes from 'prop-types';

export const FriendListItem = ({friends}) => {
    return friends.map(({id, isOnline, avatar, name}) => (
        <li key={id}>
            <span>{isOnline ? "online" : "offline"}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
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