import styles from './Menu.module.scss';
import homeInactive from './assets/home-inactive.png';
import mostViewedInactive from './assets/most-viewed-inactive.png';
import mostLikedInactive from './assets/most-liked-inactive.png';
import newsInactive from './assets/news-inactive.png';
import surpriseMeInactive from './assets/surprise-me-inactive.png';

export function Menu() {
    const listItems = [
        { src: homeInactive, content: 'Início' },
        { src: mostViewedInactive, content: 'Mais vistas' },
        { src: mostLikedInactive, content: 'Mais curtidas' },
        { src: newsInactive, content: 'Novas' },
        { src: surpriseMeInactive, content: 'Surpreenda-me' }
    ];

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu_list}>
                {listItems.map(item =>
                    <li key={item.content} className={styles.menu_item}>
                        <img src={item.src} alt="" />
                        <a href="/">{item.content}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}
