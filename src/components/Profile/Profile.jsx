import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
  <div className={css.maininfo}>
    <img
      src={image}
      alt="User avatar"
      className={css.profileimg}
    />
    <p className={css.thick}>{name}</p>
    <p>{`@${tag}`}</p>
    <p>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.item}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};