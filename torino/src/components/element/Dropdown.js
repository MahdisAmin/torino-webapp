import { toPersianNumber } from "@/utils/extras";
import styles from "./Dropdown.module.css";
import { FaUser } from "react-icons/fa6";
import { PiSignOutLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { deleteCookie } from "@/utils/cookie";

function Dropdown({ show, phone }) {
  if (!show) return;
  const exitHandler = () => {
    deleteCookie("accessToken")
    deleteCookie("refreshToken");
    console.clear()
  }
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.first}>
          <FaUser
            style={{
              fontSize: "15px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className={styles.second}>
          <h4>{toPersianNumber(phone)}</h4>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.firstuser}>
          <CiUser
            style={{
              fontSize: "20px",
              color: "#696969",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className={styles.seconduser}>
          <Link href="/profile">اطلاعات حساب کاربری</Link>
        </div>
      </div>
      <div className={styles.out}>
        <div className={styles.firstout}>
          <PiSignOutLight
            style={{
              fontSize: "20px",
              color: "#D40000",
              marginBottom: "-5px",
            }}
          />
        </div>
        <div className={styles.secondout} onClick={exitHandler}>
          <h4>خروج از حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
