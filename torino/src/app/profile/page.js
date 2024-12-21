"use client"
import styles from "./Prolayout.module.css";
import { BiEditAlt } from "react-icons/bi";
import { useGetUserData } from "@/core/services/query";
import { toPersianNumber } from "@/utils/extras";

function Profile({ children }) {
  const { data } = useGetUserData()
  if(!data)return
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
      <div className={styles.personProfileContainer}>
        <div className={styles.personInfo}>
          <h3>اطلاعات شخصی</h3>
          <p>
            <BiEditAlt />
            ویرایش اطلاعات
          </p>
        </div>
        <div className={styles.userInfo}>
          <div>
            <p>نام و نام خانوادگی</p>
          </div>
          <div className={styles.emailInfo}>
            <p style={{ color: "#282828" }}>کد ملی</p>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div>
            <p>جنسیت</p>
          </div>
          <div className={styles.emailInfo}>
            <p style={{ color: "#282828" }}>تاریخ تولد</p>
          </div>
        </div>
      </div>
      <div className={styles.personProfileContainer}>
        <div className={styles.personInfo}>
          <h3>اطلاعات حساب بانکی</h3>
          <p>
            <BiEditAlt />
            ویرایش اطلاعات
          </p>
        </div>
        <div className={styles.userInfo}>
          <div>
            <p>شماره شبا</p>
          </div>
          <div className={styles.emailInfo}>
            <p style={{ color: "#282828" }}>شماره کارت</p>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div>
            <p>شماره حساب</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
