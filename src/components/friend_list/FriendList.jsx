import PropTypes from 'prop-types'
import { FriendListItem } from "components/friend_list/friend_list_item/FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends}/>
        </ul>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}