import css from "./UserDescription.module.css";

export const UserDescription = ({ img, userName, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={img} alt={userName} className={css.avatar} />
      <p className={css.name}>{userName}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};