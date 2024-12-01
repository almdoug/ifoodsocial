import Image from "next/image";
import styles from "./page.module.css";
import send from "../assets/enviar.svg";
import Header from "./components/header/page"
import Message from "./components/message/page"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h3>AI <span>Chatbot</span> - IFOOD SOCIAL</h3>
        <hr />
        <div className={styles.chatContainer}>
          <div className={styles.messagesContainer}>
            <Message
              type={"sent"}
            >
              Enviada
            </Message>
            <Message
              type={"received"}
            >
              Oiiii
            </Message>
            <Message
              type={"received"}
            >
              Recebida
            </Message>
            <Message
              type={"sent"}
            >
              Oiiii
            </Message>
          </div>
          <form>
            <label htmlFor="msg" className={styles.messageInput}>
              <input
                type="text"
                name=""
                id="msg"
                placeholder="Digite sua mensagem"
              />
              <button>
                Enviar
                <Image 
                  src={send}
                  alt="Enviar"
                  width={20}
                  height={20}
                />                
              </button>
            </label>
          </form>
        </div>
      </main>
    </div>
  );
}
