import Modal from "./components/Modal"
import styles from './page.module.css'

import Logo from '@/../../public/LOGO EXTRAMONEY.png';

export default function Home() {
  return (
    <main className={styles.container_geral}>
      <Modal
        titleModal="ExtraMoney"
        logoModal={Logo}
        urlLogoRedirect="https://www.instagram.com/s_extramoney_s/"
        textMenssage="Acesse os Links abaixo para mudar de Vida" />
    </main>

  );
}
