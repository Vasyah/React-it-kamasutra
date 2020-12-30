import style from './AddPost.module.css';

const AddPost = (props) => {
  return (
    <section className={style.addPost}>
      <input className={style.addPost__field} type="text" placeholder="Add text for post..." />
      <button className={style.addPost__btn}>New Post</button>
    </section>
  );
}


export default AddPost;

