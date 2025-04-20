import styles from './LinkContact.module.css'

import Image from 'next/image'
import Link from 'next/link'




export default function LinkContact({ linkAtendente, imageAtendente, nomeAtendente }) {
    return (
        <Link className={styles.link_atendente} href={linkAtendente} >
            <div className={styles.container_geral}>
                <Image className={styles.foto_atendente} src={imageAtendente} alt={`Foto de ${nomeAtendente}`} />
                <h2>{nomeAtendente}</h2>
            </div>
        </Link>
    )
}