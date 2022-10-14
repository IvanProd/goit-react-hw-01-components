
import PropTypes from 'prop-types';
import {
    Friend,
    OnlineStatus,
    FriendPhoto,
    FriendName,
} from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <Friend>
            <OnlineStatus
                style={{
                    backgroundColor: `${isOnline ? "green" : "red"}`
                }}
            >
                {isOnline}
            </OnlineStatus>
            <FriendPhoto src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </Friend>
    );
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};