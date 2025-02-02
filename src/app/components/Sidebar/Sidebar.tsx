import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <ul className={styles.menu_list}>
        <li>
          <Link href="#">
            <Image
              src="/svg/user.svg"
              alt="user"
              width={20}
              height={20}
            ></Image>
            <span>Moje dane</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/svg/messages.svg"
              alt="messages"
              width={20}
              height={20}
            ></Image>
            <span>Wiadomości</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/svg/cal.svg"
              alt="calendar"
              width={20}
              height={20}
            ></Image>
            <span>Rezerwacje </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/svg/offers.svg"
              alt="offers"
              width={20}
              height={20}
            ></Image>
            <span>Dedykowane oferty </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/svg/exit.svg"
              alt="exit"
              width={20}
              height={20}
            ></Image>
            <span>Wyloguj się </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
