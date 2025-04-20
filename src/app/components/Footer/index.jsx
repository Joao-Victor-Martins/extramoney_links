import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido por <Link href="https://www.instagram.com/sargentojojo">Cyber-Tech</Link>.</p>
        </footer>
    )
}