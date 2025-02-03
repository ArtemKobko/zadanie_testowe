"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.container}>
      <ul className={styles.menu_list}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/">
            <Image src="/svg/user.svg" alt="user" width={20} height={20} />
            <span>Moje dane</span>
          </Link>
        </li>
        <li className={pathname === "/messages" ? styles.active : ""}>
          <Link href="/messages">
            <Image
              src="/svg/messages.svg"
              alt="messages"
              width={20}
              height={20}
            />
            <span>Wiadomości</span>
          </Link>
        </li>
        <li className={pathname === "/bookings" ? styles.active : ""}>
          <Link href="/bookings">
            <Image src="/svg/cal.svg" alt="calendar" width={20} height={20} />
            <span>Rezerwacje</span>
          </Link>
        </li>
        <li className={pathname === "/offers" ? styles.active : ""}>
          <Link href="/offers">
            <Image src="/svg/offers.svg" alt="offers" width={20} height={20} />
            <span>Dedykowane oferty</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/svg/exit.svg" alt="exit" width={20} height={20} />
            <span>Wyloguj się</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
