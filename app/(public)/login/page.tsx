"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";

export default function Login() {
  const router = useRouter();

  const handleSubmitLogin = () => {
    router.push("/");
  };

  return (
    <main className={styles.login}>
      <Logo width="200px" height="200px" />
      <form className="box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alex@example.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="********" />
          </div>
        </div>

        <button
          onClick={handleSubmitLogin}
          type="button"
          className="button is-primary"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
