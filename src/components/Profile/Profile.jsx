import { UserDescription } from "./UserDescription/UserDescription";
import { UserStats } from "./UserStats/UserStats";
import css from "./Profile.module.css";

export const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <UserDescription
        img={image}
        userName={name}
        tag={tag}
        location={location}
      />
      <UserStats stats={stats} />
    </div>
  );
};