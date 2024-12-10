import { toPersianNumber } from "@/utils/extras";
import styles from "./Banner.module.css";
import { FaPhoneAlt } from "react-icons/fa";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1>
            خرید تلفنی از
            <span>تورینو</span>
          </h1>
          <h4>به هرکجا که میخواهید!</h4>
        </div>
        <div>
          <img src="/images/man.png" />
        </div>
      </div>

      <div className={styles.telInfo}>
        <h1>
          {toPersianNumber("021-1840")}
          <FaPhoneAlt className={styles.icon} />
        </h1>
        <button>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default Banner;
