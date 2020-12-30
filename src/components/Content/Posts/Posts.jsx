import style from './Posts.module.scss';
import Post from './Post/Post';

const Posts = (props) => {
  return (
    <section className={style.wrapper}>
      <ul className={style.Posts}>
        <Post/>
        <Post/>
        <Post/>
      </ul>
    </section>
  );
}


export default Posts;

