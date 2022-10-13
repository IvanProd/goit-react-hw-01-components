import PropTypes from 'prop-types';
import {UserCard, Avatar, Description, Name, Tag, Location, Stats, Label, Quantity, StatBox,} from './Profile.styled'


export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatBox>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatBox>
        <StatBox>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatBox>
        <StatBox>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatBox>
      </Stats>
    </UserCard>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};