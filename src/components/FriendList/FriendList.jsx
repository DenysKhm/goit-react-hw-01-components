import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsListItem 
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};