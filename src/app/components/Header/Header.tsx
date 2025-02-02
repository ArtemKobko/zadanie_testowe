import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        {" "}
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="logo"
          width={150}
          height={50}
        />
        <nav className={styles.navbar_container}>
          <ul className={styles.list}>
            <li>
              <Link href="#">Obozy</Link>
            </li>
            <li>
              <Link href="#">Półkolonie</Link>
            </li>
            <li>
              <Link href="#">Wycieczki szkolne</Link>
            </li>
            <li>
              <Link href="#">Atrakcje</Link>
            </li>
            <li>
              <Link href="#">Noclegi dla grup</Link>
            </li>
          </ul>
          <div className={styles.currency}>
            <span>PLN</span>
          </div>
        </nav>
        <div className={styles.user_info}>
          <p className={styles.avatar}>J</p>
          <p className={styles.name}>Jan Kowalski </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
