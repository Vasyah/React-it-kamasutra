import style from './Post.module.scss';

const Post = (props) => {
  return (
    <li className={style.Post}>
      <a href="javascript:void(0)" className={style.Post__profile}>
        <img src="https://miro.medium.com/max/2400/0*FQDpr9ek5UeREK-o.jpeg" alt="" />
      </a>
      <article className={style.Post__text}>That's a text of this Post it's sooo long
      That's a text of this Post it's sooo long
      That's a text of this Post it's sooo long
      That's a text of this Post it's sooo long
          <a href="javascript:void(0)" className={style.Post__like}>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/4ffeb987611855.Y3JvcCw5MDAsNzAzLDAsOTg.jpg" alt="" /></a></article>
    </li>
  );
}


export default Post;

