import styles from './Footer.module.scss';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_icons}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="instagram icon" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter icon" />
                </a>
            </div>
            <p>Copyright 2023</p>
        </footer>
    );
}
