import PropTypes from 'prop-types';
import { Chip, FriendAvatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return  <>
                <Chip isOnline={isOnline}></Chip>
                <FriendAvatar src={avatar} alt="User avatar"/>
                <FriendName>{name}</FriendName>
            </>
  };

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}