"use client";

import { useSearchParams } from "next/navigation";
import styles from "./User.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { howmanyDats, toPersianNumber } from "@/utils/extras";
import { Suspense } from "react";

function UserInfo() {
  const params = useSearchParams();
  const title = params.get("title");
  const price = params.get("price");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const day = howmanyDats(startDate, endDate);
  const night = +day - 1;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("hi");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <div>
            <h2>
              <FaUser style={{ fontSize: "15px", padding: "0 10px" }} />
              مشخصات مسافر
            </h2>
          </div>
          <input
            placeholder="نام و نام خانوادگی"
            {...register("name", { required: true })}
          />
          {errors.name && <span>این فیلد الزامی است </span>}
          <input
            placeholder="کد ملی"
            {...register("name", { required: true })}
          />
          {errors.name && <span>این فیلد الزامی است </span>}{" "}
          <input
            placeholder="تاریخ تولد"
            {...register("name", { required: true })}
          />
          {errors.name && <span>این فیلد الزامی است </span>}{" "}
          <input
            placeholder="جنسیت"
            {...register("name", { required: true })}
          />
          {errors.name && <span> این فیلد الزامی است </span>}
        </div>
        <Suspense>
          <div className={styles.tourCard}>
            <div className={styles.tourTitle}>
              <h1>{title}</h1>
              <p>
                {toPersianNumber(day)} روز و {toPersianNumber(night)} شب
              </p>
            </div>
            <div className={styles.price}>
              <p>قیمت نهایی</p>
              <span> {toPersianNumber(price)} </span>
              تومان
            </div>
            <button type="submit"> ثبت و خرید نهایی </button>
          </div>
        </Suspense>
      </form>
    </div>
  );
}

export default UserInfo;
