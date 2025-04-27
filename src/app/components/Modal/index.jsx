import styles from './Modal.module.css'
import LinkContact from '../LinkContact'

import Image from 'next/image'
import Link from 'next/link'

import LineHeader from '@/../../public/Line.svg'
import Investidor from '@/../../public/INVESTIDOR.jpg'
import Spv from '@/../../public/SPV.jpeg'
import Ebook from '@/../../public/EBOOK.png'



export default function Modal({ titleModal, logoModal, urlLogoRedirect, textMenssage }) {
    return (
        <section className={styles.modal}>
            <div className={styles.container_geral}>
                <div className={styles.container_interno_one}>
                    <Link href={urlLogoRedirect}>
                        <Image className={styles.logo_image} src={logoModal} alt='Logo' />
                    </Link>
                    <h1>{titleModal}</h1>
                    <Image src={LineHeader} alt='Line of Header' />
                    <p>{textMenssage}</p>
                </div>
                <div className={styles.container_interno_two}>
                    <LinkContact 
                    linkAtendente={"https://kiwify.app/velJGLO?afid=KwRTD5RP"} 
                    imageAtendente={Investidor} 
                    nomeAtendente={"Curso Investidor em 1 Hora"}
                    />
                    <LinkContact 
                    linkAtendente={"https://kiwify.app/fGToSkj?afid=CEtePAj2"} 
                    imageAtendente={Spv} 
                    nomeAtendente={"Curso sua Primeira Venda"}
                    />
                    <LinkContact 
                    linkAtendente={"https://drive.google.com/drive/folders/1MQ2sxDFmB-kQa9X7Mw4_ah8mQaB6zC8z?usp=sharing"} 
                    imageAtendente={Ebook} 
                    nomeAtendente={"Acessar E-Book Grátis"}
                    />
                </div>
            </div>
        </section>
    )
}