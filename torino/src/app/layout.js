"use client";

import Image from "next/image";
import styles from "./layout.module.css";
import { useState } from "react";

import Footer from "../components/element/Footer";
import Auth from "@/components/modal/Auth";
import TanstackQueryProvider from "../components/provider/TanstackQueryProvider";

import Link from "next/link";

import LoginButton from "@/components/LoginButton";

export default function RootLayout({ children }) {
 

  return (
    <html lang="fa" dir="rtl">
      <body className={styles.body}>
        <TanstackQueryProvider>
          <header className={styles.container}>
            <div className={styles.logoMenu}>
              <Image
                src="/images/torino.png"
                width={146}
                height={44}
                alt="torinologo"
              ></Image>
              <ul>
                <Link href="/">
                  <li>صفحه اصلی</li>
                </Link>
                <li>خدمات گردشگری</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
            </div>
            <Auth/>
          </header>
          {children}
          <footer>
            <Footer />
            <div className={styles.footer}>
              <div className={styles.topMain}>
                <div className={styles.right}>
                  <div>
                    <h3>تورینو</h3>
                    <p>درباره ما</p>
                    <p>تماس با ما</p>
                    <p>چرا تورینو</p>
                    <p>بیمه مسافرتی</p>
                  </div>
                  <div>
                    <h3>خدمات مشتریان</h3>
                    <p>پشتیبانی آنلاین </p>
                    <p>راهنمای خرید</p>
                    <p>راهنمای استرداد</p>
                    <p>پرسش و پاسخ</p>
                  </div>
                </div>
                <div className={styles.left}>
                  <div className={styles.info}>
                    <Image
                      src="/images/torino.png"
                      width={146}
                      height={44}
                      alt="torinologo"
                    ></Image>
                    <p>تلفن پشتیبانی:- 8574-021</p>
                  </div>
                  <div className={styles.logos}>
                    <Image
                      src="/images/1.png"
                      width={78}
                      height={74}
                      alt="torinologo"
                    ></Image>
                    <Image
                      src="/images/2.png"
                      width={78}
                      height={74}
                      alt="torinologo"
                    ></Image>
                    <Image
                      src="/images/3.png"
                      width={78}
                      height={74}
                      alt="torinologo"
                    ></Image>
                    <Image
                      src="/images/4.png"
                      width={78}
                      height={74}
                      alt="torinologo"
                    ></Image>
                    <Image
                      src="/images/5.png"
                      width={78}
                      height={74}
                      alt="torinologo"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className={styles.downSide}>
                <p>کلیه حقوق این وب سایت مطعلق به تورینو میباشد.</p>
              </div>
            </div>
          </footer>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
