import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.info}>
          <li>
            <a href="#">Pomoc i kontakt</a>
          </li>
          <li>
            <a href="#">Katalogi</a>
          </li>
          <li>
            <a href="#">Jak rezerwować?</a>
          </li>
          <li>
            <a href="#">Dla firm</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className={styles.social}>
          <Link href="/">
            <Image src="/svg/instagram.svg" alt="flag" width={20} height={20} />
          </Link>
          <Link href="/">
            <Image src="/svg/facebook.svg" alt="flag" width={20} height={20} />
          </Link>
          <Link href="/">
            <Image src="/svg/linkedin.svg" alt="flag" width={20} height={20} />
          </Link>
        </div>
        <p className={styles.year}>
          {" "}
          GoFunlo &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
