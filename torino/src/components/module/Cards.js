"use client";
import { howmanyDats, toPersianNumber } from "@/utils/extras";
import styles from "./Cards.module.css";
import Link from "next/link";

function Cards({ data }) {
  const { id, title, price, options, image, startDate, endDate } = data;

  const day = howmanyDats(startDate, endDate);
  return (
    <div className={styles.whole}>
      <div className={styles.container}>
        <img src={image} />
        <div className={styles.description}>
          <p>{title}</p>
          <span>
            {options[1]} - {toPersianNumber(day)} روزه -{options[0]}
          </span>
        </div>
        <div className={styles.price}>
          <Link href={`/details/${id}`}>
            <button>رزرو</button>
          </Link>
          <p>{toPersianNumber(price)} تومان</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
