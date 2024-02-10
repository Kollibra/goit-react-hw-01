import css from "./FriendListItem.module.css";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.green : css.red}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </li>
  );
};