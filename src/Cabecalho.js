import styles from './Cabecalho.css';
import logo from './spotify_logo.png';
import Menu from './Menu.js';

function Cabecalho() {
    return(
        <div className={styles}>
            <header>
            <div className="header_1" id="header">
            <a href="App.js"> <img src={logo} className="logo" alt="logo" /> </a>
            </div>
            <Menu />
            </header>
        </div>
        );
}

export default Cabecalho