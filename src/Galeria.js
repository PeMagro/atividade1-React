import styles from './Galeria.css';
import img1 from './spotify_galeria_1.png';
import img2 from './spotify_galeria_2.png';
import img3 from './spotify_galeria_3.png';
import img4 from './spotify_galeria_4.png';
import img5 from './spotify_galeria_5.png';
import img6 from './spotify_galeria_6.png';

function Galeria() {
    return (
        <div className={styles}>
            <div className="section_galeria" id="section_galeria">
                <div className="galeria">
                    <h2>Galeria de Fotos do Spotify</h2>
                    <div className="imagens_galeria_1">
                        <img src={img1} className="img1" alt="Imagem representativa do spotify" />
                        <img src={img2} className="img2" alt="Imagem representativa do spotify" />
                        <img src={img3} className="img3" alt="Imagem representativa do spotify" />
                    </div>
                    <div className="imagens_galeria_2">
                        <img src={img4} className="img4" alt="Imagem representativa do spotify" />
                        <img src={img5} className="img5" alt="Imagem representativa do spotify" />
                        <img src={img6} className="img6" alt="Imagem representativa do spotify" />
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Galeria