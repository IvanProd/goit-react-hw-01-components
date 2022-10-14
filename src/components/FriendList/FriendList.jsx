import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem/FriendItem';
import { FriendPlates } from './FriendList.styled'


export const FriendList = ({ friends }) => {
// console.log(avatar, name, isOnline, id)
    return (
            <FriendPlates>
            {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                        />
                    );
                })}
            </FriendPlates>
        );
    };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};