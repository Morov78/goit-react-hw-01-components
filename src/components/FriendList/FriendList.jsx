import { FriendListItem } from 'components/FriendsListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li className={css.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
FriendList.prototype = {
  friends: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
