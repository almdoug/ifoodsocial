import Image from "next/image";
import styles from "./page.module.css";

import logo from "../../../assets/Logo.svg";
import user from "../../../assets/Foto de perfil.png";

export default function Header() {
  return (
    <header className={styles.container}>
        <Image 
            src={logo}
            alt="logo do ifood social"
        />
        <div className={styles.userContainer}>
            <Image 
                src={user}
                alt="foto de perfil do usuário"
            />
            <div className={styles.userInfo}>
                <p>Nome do estabelecimento</p>
                <p>Assistente de vendas</p>
            </div>
        </div>
    </header>
  );
}
