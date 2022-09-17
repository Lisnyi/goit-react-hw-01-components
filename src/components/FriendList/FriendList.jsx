import PropTypes from 'prop-types'
import { FriendListItem } from "components"
import { Box } from 'common';

export const FriendList = ({friends}) => {
    return (
        <Box as='section' py={5} width='100%'>
            <ul>
                <FriendListItem friends={friends}/>
            </ul>
        </Box>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}