"use client";

import Image from "next/image";
import styles from "./layout.module.css";
import { useState, useEffect } from "react";
import { getCookie } from "@/utils/cookie";
import Footer from "../components/element/Footer";
import Auth from "@/components/modal/Auth";
import TanstackQueryProvider from "@/components/provider/TanstackQueryProvider";
import api from "@/services/api";


export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const checkAuth = async () => {
    const accessToken = getCookie("accessToken");

    if (!accessToken) return;
    try {
      const response = await api.get("/user/profile");
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const enterHandler = () => {
    setShowModal(true);
  };

  const buttonText = (mobile) => {
    setUserData({ ...userData, mobile });
    setShowModal(false);
  };
  const logoutHandler = () => {
    console.log("i am exit");
    
    // deleteCookie("accessToken");
    // deleteCookie("refreshToken");
  };
  return (
    <html lang="fa" dir="rtl">
      <body>
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
                <li>صفحه اصلی</li>
                <li>خدمات گردشگری</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
            </div>
            <div className={styles.link}>
              {userData ? (
                <select>
                  <option>{userData.mobile || "شماره نامشخص"}</option>
                  <option>اطلاعات حساب</option>
                  <option onChange={logoutHandler}>خروج از حساب</option>
                </select>
              ) : (
                <button onClick={enterHandler}>
                  <span>
                    <img src="/images/profile.png" />
                    ورود | ثبت نام
                  </span>
                </button>
              )}
            </div>
            <Auth
              show={!!showModal}
              setShowModal={setShowModal}
              onLogin={buttonText}
            />
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
