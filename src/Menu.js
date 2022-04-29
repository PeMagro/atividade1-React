import styles from './Menu.css';

function Menu(){
    return(
        <div className={styles}>
            <div className="header_2">
                <nav className="menu">
                    <a href="#section_artistas">Artistas</a>
                    <a href="#section_albuns">Álbuns</a>
                    <a href="#section_galeria">Galeria de Fotos</a>
                </nav>
            </div>
        </div>
    );
}

export default Menu