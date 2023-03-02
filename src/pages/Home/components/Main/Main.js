import styles from './Main.module.scss';
import banner from './assets/banner.png';
import Menu from '../Menu';

export function Main() {
    return (
        <main className={styles.main}>
            <section>
                <Menu />
                <div>
                    <h1>A galeria mais completa do mundo</h1>
                    <img src={banner} alt="Imagem da Terra vista do espaço" />
                </div>
            </section>
        </main>
    );
}
