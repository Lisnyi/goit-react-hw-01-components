import PropTypes from 'prop-types'
import { Box } from 'common/Box.jsx';
import { ProfileAvatar, UserName, UserTag, UserLocation, StatsList, StatsItem } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return (
      <Box as='section' pb={5}>
        <Box width='250px' display='flex' alignItems='center' flexDirection='column' p={4} border='normal' mx='auto'>
          <Box display='flex' alignItems='center' flexDirection='column'>
            <ProfileAvatar
              src={avatar}
              alt={username}
            />
            <UserName>{username}</UserName>
            <UserTag>@{tag}</UserTag>
            <UserLocation>{location}</UserLocation>
          </Box>
          
          <StatsList>
            <StatsItem>
              <span>Followers</span>
              <span>{followers}</span>
            </StatsItem>
            <StatsItem>
              <span>Views</span>
              <span>{views}</span>
            </StatsItem>
            <StatsItem>
              <span>Likes</span>
              <span>{likes}</span>
            </StatsItem>
          </StatsList>
        </Box>
      </Box>
    );
  };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}