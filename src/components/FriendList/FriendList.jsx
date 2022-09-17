import PropTypes from 'prop-types'
import { FriendListItem } from "components"

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