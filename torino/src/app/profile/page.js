"use client"
import styles from "./Prolayout.module.css";
import { BiEditAlt } from "react-icons/bi";
import { useGetUserData } from "@/core/services/query";
import { toPersianNumber } from "@/utils/extras";

function Profile({ children }) {
  const {data} = useGetUserData()
  return (
    <>
      <div className={styles.profileContainer}>
        <h3>اطلاعات حساب کاربری</h3>
        <div className={styles.userInfo}>
          <div>
            <p>شماره موبایل:</p>
            <span>{toPersianNumber(data?.data.mobile)}</span>
          </div>
          <div className={styles.emailInfo}>
            <p>ایمیل:</p>
            <p>
              <BiEditAlt />
              افزودن
            </p>
          </div>
        </div>
      </div>
      <div className={styles.profileContainer}>
        <h3>اطلاعات حساب کاربری</h3>
        <div className={styles.userInfo}>
          <div>
            <p>شماره موبایل:</p>
          </div>
          <div className={styles.emailInfo}>
            <p>ایمیل:</p>
            <p>
              <BiEditAlt />
              افزودن
            </p>
          </div>
        </div>
      </div>
      <div className={styles.profileContainer}>
        <h3>اطلاعات حساب کاربری</h3>
        <div className={styles.userInfo}>
          <div>
            <p>شماره موبایل:</p>
          </div>
          <div className={styles.emailInfo}>
            <p>ایمیل:</p>
            <p>
              <BiEditAlt />
              افزودن
            </p>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Profile;
