import './App.css';
import Header from './Header';


const App = () => {
  return (
    <div className="app-wrp">
      <Header/>

      <aside className="sidebar">
        <nav>
          <div>Profile</div>
          <div>Profile</div>
          <div>Profile</div>
          <div>Profile</div>
          <div>Profile</div>
        </nav>
      </aside>

      <main className="content">
        <div className="content__logo-wrp"><img src="https://s1.1zoom.ru/b5050/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_1920x1200.jpg" alt="" /></div>
        <article>
          <h3 className="title">Title</h3>

        </article>
      </main>
    </div>
  );
}


export default App;

