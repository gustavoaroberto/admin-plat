import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Menu() {
  return (
    <aside className={`is-hidden-touch ${styles.menu}`}>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/customers">Customers</Link>
        </li>
        <li>
          <Link href="/billing">Billing</Link>
        </li>
      </ul>
    </aside>
  );
}
