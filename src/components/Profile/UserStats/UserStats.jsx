import css from "./UserStats.module.css";

export const UserStats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <br />
        <span className={css.value}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <br />
        <span className={css.value}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <br />
        <span className={css.value}>{likes}</span>
      </li>
    </ul>
  );
};