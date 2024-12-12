"use client";
import React from "react";
import styles from "./not-found.module.css";
import Image from "next/image";
function GlobalError({ error, reset }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>اتصال با سرور برقرار نیست!</h3>
        <h4 style={{fontSize:"24px"}}>لطفا بعدا دوباره امتحان کنید.</h4>
      </div>
      <div>
        <Image
          src="/images/500.png"
          width={555}
          height={555}
          alt="Server Error"
        ></Image>
      </div>
    </div>
  );
}

export default GlobalError;
