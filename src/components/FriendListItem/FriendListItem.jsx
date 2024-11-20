import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const textColor = isOnline ? css.isonline : css.isofline;
  const status = isOnline ? 'Online' : 'Offline';

  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={textColor}>{status}</p>
    </div>
  );
}
