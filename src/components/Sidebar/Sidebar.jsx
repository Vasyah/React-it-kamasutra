import style from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={style.sidebar}>
      <nav className={style.sidebarList}>
        <div className={style.sidebarList__item}>Profile</div>
        <div className={style.sidebarList__item}>Messages</div>
        <div className={style.sidebarList__item}>News</div>
        <div className={style.sidebarList__item}>Music</div>
        <div className={style.sidebarList__item}>Settings</div>
      </nav>
    </aside>

  );
}


export default Sidebar;

