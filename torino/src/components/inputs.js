"use client";
import styles from "./inputs.module.css";

import { CiLocationOn } from "react-icons/ci";
import { TbWorldSearch } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// import "react-multi-date-picker/styles/colors/green.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { useState } from "react";

function Inputs() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedRange, setSelectedRange] = useState({ from: null, to: null });
  return (
    <div className={styles.container}>
      <CiLocationOn className={styles.icon} />
      <input placeholder="مبدا" />
      <TbWorldSearch className={styles.icon} />
      <input placeholder="مقصد" />
      <IoCalendarOutline className={styles.icon} />
      <div className={styles.dateContainer}>
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          locale={persian_fa}
          calendar={persian}
          className="green"
          // inputClass={styles.customInput}
          range
          placeholder="تاریخ"
          style={{
            border: "none",
            padding: "8px 12px",
            fontSize: "16px",
            width: "100%",
          }}
        />
      </div>
      <button>جستجو</button>
    </div>
  );
}

export default Inputs;

