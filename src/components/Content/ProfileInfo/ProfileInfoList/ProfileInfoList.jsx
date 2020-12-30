import style from './ProfileInfoList.module.css';
const ProfileInfoList = (props) => {
  return (

    <ul className={style.profileList}>
      <li className={style.profileList__item}>
        <span>key: </span>
        <span>value</span>
      </li>
      <li className={style.profileList__item}>
        <span>key: </span>
        <span>value</span>
      </li>
      <li className={style.profileList__item}>
        <span>key: </span>
        <span>value</span>
      </li>
      <li className={style.profileList__item}>
        <span>key: </span>
        <span>value</span>
      </li>
    </ul>
  );
}


export default ProfileInfoList;

