import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <a href="javascript:void(0);" className={style.header__logoWrp}><img src="https://free-images.com/or/617d/18_icon_b_hungary.jpg" alt="logo" /></a>
    </header>

  );
}


export default Header;

