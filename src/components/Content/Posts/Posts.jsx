import style from './Posts.module.css';

const Posts = (props) => {
  return (
    <section className={style.wrapper}>
      <ul className={style.Posts}>
        <li className={style.Post}>
          <a href="javascript:void(0)" className={style.Post__profile}>
            <img src="https://miro.medium.com/max/2400/0*FQDpr9ek5UeREK-o.jpeg" alt="" />
          </a>
          
        </li>
      </ul>
    </section>
  );
}


export default Posts;

