import style from './ProfileInfo.module.css';
import ProfileInfoList from './ProfileInfoList/ProfileInfoList';

const ProfileInfo = (props) => {
  return (

    <div className={style.profile}>
      <div className={style.profile__img}>
        <div className={style.profile__imgWrp}>
          <img src="https://yt3.ggpht.com/a/AATXAJxGTeRSzkZFyXYGW-1iXZQMQfq2pmBMcEnUlvXU=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
        </div>
      </div>
      <div className={style.profile__info}>
        <div className={style.profile__title}>UserName Test</div>
        <ProfileInfoList />
      </div>
    </div>
  );
}


export default ProfileInfo;

