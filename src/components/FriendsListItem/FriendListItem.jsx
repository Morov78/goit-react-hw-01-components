import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  let className = css.status;
  if (isOnline) {
    className += ' ' + css.online;
  }
  return (
    <>
      <span className={className}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
