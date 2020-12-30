import style from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPost from './AddPost/AddPost';
import Posts from './Posts/Posts';

const Content = (props) => {
  return (
    <main className={style.content}>

      <div className={style.content__img}>
        <div className={style.imgWrp}><img src="https://s1.1zoom.ru/b5050/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_1920x1200.jpg" alt="" /></div>
      </div>
      <div className={style.content__main}>
        <ProfileInfo />
        <AddPost />
      </div>

    </main>
  );
}


export default Content;

