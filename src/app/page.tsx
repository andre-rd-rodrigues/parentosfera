"use client";
import styles from "./page.module.scss";
import Typewriter from "typewriter-effect";
import { lato, montserrat, poppins } from "@/fonts/fonts";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        :root {
          --montserrat: ${montserrat.style.fontFamily};
          --lato: ${lato.style.fontFamily};
          --poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <main className={styles.main}>
        <video autoPlay loop muted preload="/images/initial.png">
          <source src="/family.mp4" type="video/mp4" />
        </video>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            <Typewriter
              options={{
                strings: ["#PARENTOSFERA"],
                autoStart: true,
                loop: true,
                wrapperClassName: styles.typewriter
              }}
            />
          </div>
          <p>
            Se chegou até aqui é porque a parentalidade é importante para si.
            Inscreva-se agora e receba contéudo em primeira mão, teremos
            surpresas brevemente.
          </p>
          <button>INSCRIÇÃO</button>
        </div>
      </main>
    </>
  );
}
