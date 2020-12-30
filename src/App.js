import "./style/normalize.css";
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

const App = () => {
    return ( <
        div className = "app-wrp" >
        <
        Header / >
        <
        Sidebar / >
        <
        Content / >
        <
        /div>
    );
}


export default App;