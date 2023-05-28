"use client";
import styles from "./page.module.scss";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay loop muted>
        <source src="/family.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentContainer}>
        <Typewriter
          options={{
            strings: ["#PARENTOSFERA"],
            autoStart: true,
            loop: true,
            wrapperClassName: styles.typewriter
          }}
        />
        <p>
          Se chegou até aqui é porque a parentalidade é importante para si.
          Inscreva-se agora e receba contéudo em primeira mão, teremos surpresas
          brevemente.
        </p>
        <button>INSCRIÇÃO</button>
      </div>
    </main>
  );
}
