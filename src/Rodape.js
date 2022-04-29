import styles from './Rodape.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import spotify from './spotify_logo.png';

function Rodape(){
    return(
        <div className={styles}>
            <footer>
                <div className="redes">
                <a href="https://www.facebook.com/SpotifyBrasil" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="ícone do facebook" /></a>
                <a href="https://www.instagram.com/spotifybrasil/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="ícone do instagram" /></a>
                <a href="https://twitter.com/SpotifyBrasil" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="ícone do twitter" /></a>
                </div>
                <div className="texto_footer">
                    <a href="#header">
                        <p>VOLTAR PARA O TOPO</p>
                    </a>
                </div>
                <div className="site_spotify">
                    <a href="https://www.spotify.com/br/" target="_blank" rel="noopener noreferrer"><img src={spotify} alt="logo do spotify" /></a>
                </div>
            </footer>
        </div>
    );
}

export default Rodape