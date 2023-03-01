import styles from './Header.module.scss';
import logo from './assets/logo.png';
import searchIcon from './assets/searchicon.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Alura Space Logo" />
            <div className={styles.header_container}>
                <input
                    className={styles.header_input}
                    placeholder="O que você procura?"
                    type="text"
                />
                <img src={searchIcon} alt="Icon for search bar" />
            </div>
        </header>
    );
}
