import styles from './Rodape.css';
import instagram from './instagram.png';

function Rodape(){
    return(
        <div className={styles}>
            <footer>
            <a href="https://www.instagram.com/spotify/"><img src={instagram} alt="ícone do instagram" /></a>
            </footer>
        </div>
    );
}

export default Rodape