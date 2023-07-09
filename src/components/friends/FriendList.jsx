import css from './FriendList.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
              <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}