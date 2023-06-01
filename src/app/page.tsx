import Title from "./components/Title/Title";
import styles from "./page.module.scss";

import { lato, montserrat, poppins } from "@/fonts/fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay preload="none" loop muted poster="/images/initial.png">
        <source src="/family.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentContainer}>
        <div className={`${styles.title} ${montserrat.className}`}>
          <Title words={["#PARENTOSFERA"]} />
        </div>
        <p className={lato.className}>
          Se chegaste até aqui é porque a parentalidade é importante para ti.
          Carrega no botão e vamos formar esta comunidade juntos, teremos
          surpresas brevemente.
        </p>
        <button className={poppins.className}>
          <a href="https://forms.gle/P597vVmPawUfQL6b7">fazer parte</a>
        </button>
      </div>
    </main>
  );
}
