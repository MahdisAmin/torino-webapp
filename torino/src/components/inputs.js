import styles from "./inputs.module.css";

import { CiLocationOn } from "react-icons/ci";
import { TbWorldSearch } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";

function Inputs() {
  return (
    <div className={styles.container}>
      <CiLocationOn className={styles.icon} />
      <input placeholder="مبدا" />
      <TbWorldSearch className={styles.icon} />
      <input placeholder="مقصد" />
      <IoCalendarOutline className={styles.icon} />
      <input placeholder="تاریخ" style={{borderLeft:"none"}} />
      <button>جستجو</button>
    </div>
  );
}

export default Inputs;
