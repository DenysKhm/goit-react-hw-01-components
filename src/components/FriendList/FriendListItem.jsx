import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span  style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</span>
      <img className={avatar} src={avatar} alt="User avatar" width="48" />
      <p className={name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};