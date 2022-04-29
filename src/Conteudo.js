import styles from './Conteudo.css';
import direita from './direita.png';
import esquerda from './esquerda.png';
import ret from './ret.png';
import l7 from './L7.png';
import vivaz from './vivaz.png';
import castelos_e_ruinas from './castelos&ruinas.png';

function Conteudo(){
    return(
        <div className={styles}>
            <div className="div_conteudo">
            <section className="section_artistas" id="section_artistas">
                <div className="principais_artistas">
                    <h2> <span>Artistas</span> mais escutados em abril</h2>
                    <div className="top_artistas">
                        <aside className="artistas_esquerda">
                            <img src={esquerda} alt="Seta para a esquerda"/>
                        </aside>
                        <div className="artista">
                            <img src={ret} alt="Rapper brasileiro Filipe Ret" />
                        </div>
                        <div className="artista">
                            <img src={l7} alt="Rapper brasileiro L7nnon (Lennon)" />
                        </div>
                        <aside className="artistas_direita">
                            <img src={direita} alt="Seta para a direita"/>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="section_albuns" id="section_albuns">
                <div className="principais_albuns">
                    <h2> <span>Álbuns</span> mais escutado em abril</h2>
                    <div className="top_albuns">
                        <aside className="albuns_esquerda">
                            <img src={esquerda} alt="Seta para a esquerda"/>
                        </aside>
                        <div className="album">
                            <img src={vivaz} alt="Álbum Vivaz do Rapper Filipe Ret" />
                        </div>
                        <div className="album">
                            <img src={castelos_e_ruinas} alt="Álbum Castelos e Ruínas do Rapper BK" />
                        </div>
                        <aside className="albuns_direita">
                            <img src={direita} alt="Seta para a direita"/>
                        </aside>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default Conteudo