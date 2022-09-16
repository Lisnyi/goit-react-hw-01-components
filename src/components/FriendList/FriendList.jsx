import PropTypes from 'prop-types'
import { FriendListItem } from "components/FriendList/FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <ul>
            <FriendListItem friends={friends}/>
        </ul>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}