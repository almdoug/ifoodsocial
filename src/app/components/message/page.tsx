import styles from "./page.module.css";

interface MessageProps {
  type: string;
  children: string;
}

export default function Message({ type, children }: MessageProps) {
  return (
    <>
      {type === "sent" ? (
        <div className={styles.sentWrapper}>
          <div className={`${styles.messageContainer} ${styles.sent}`}>
            <p>{children}</p>
          </div>
        </div>
      ) : (
        <div className={styles.receivedWrapper}>
          <div className={`${styles.messageContainer} ${styles.received}`}>
            <p>{children}</p>
          </div>
        </div>
      )}
    </>
  );
}
