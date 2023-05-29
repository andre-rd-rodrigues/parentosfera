import Title from "./components/Title/Title";
import styles from "./page.module.scss";

import { lato, montserrat, poppins } from "@/fonts/fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay loop muted poster="/images/initial.png">
        <source src="/family.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentContainer}>
        <div className={`${styles.title} ${montserrat.className}`}>
          <Title words={["#PARENTOSFERA"]} />
        </div>
        <p className={lato.className}>
          Se chegou até aqui é porque a parentalidade é importante para si.
          Inscreva-se agora e receba contéudo em primeira mão, teremos surpresas
          brevemente.
        </p>
        <button className={poppins.className}>INSCRIÇÃO</button>
      </div>
    </main>
  );
}
