"use client";

import styles from "./User.module.css";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
import { howmanyDats, toPersianNumber } from "@/utils/extras";

import { getCookie } from "@/utils/cookie";
import toast from "react-hot-toast";
import { useGetBasket } from "@/core/services/query";
import { useAddToBasket, useSubmitOrder } from "@/core/services/mutations";

function UserInfo(params) {
  console.clear();
  const { searchParams } = params;
  const { title, price, startDate, endDate, id } = searchParams;
  // const { data, isLoading } = useGetBasket();
  // const addToBasket = useAddToBasket();
  const submitOrder = useSubmitOrder();
  console.log(id);

  const day = howmanyDats(startDate, endDate);
  const night = +day - 1;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const token = getCookie("accessToken");
    if (!token) {
      toast.error("برای ادامه باید وارد شوید");
      console.clear();

      return;
    }

    // if (isLoading) {
    //   toast.loading("در حال بررسی سبد خرید...");
    //   return;
    // }

    // if (!data?.length) {
    //   addToBasket.mutate(id, {
    //     onSuccess: () => {
    //       console.log("تور با موفقیت به سبد اضافه شد.");
    //       submissionHandler(formData);
    //     },
    //     onError: (error) => {
    //       console.error("خطا در افزودن به سبد خرید:", error);
    //       toast.error("افزودن به سبد خرید ناموفق بود.");
    //     },
    //   });
    // } else {
    //   submissionHandler(formData);
    // }
  };

  const submissionHandler = (formData) => {
    console.log("شروع ارسال سفارش:", formData);

    submitOrder.mutate(
      {
        nationalCode: formData.nationalCode,
        fullName: formData.fullName,
        birthDate: formData.birthDate,
        gender: formData.gender,
      },
      {
        onSuccess: () => {
          toast.success("سفارش با موفقیت ثبت شد.");
        },
        onError: (error) => {
          console.error("خطا در ثبت سفارش:", error);
          toast.error("ثبت سفارش ناموفق بود.");
        },
      }
    );
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
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span>این فیلد الزامی است </span>}
          <input
            placeholder="کد ملی"
            {...register("nationalCode", { required: true })}
          />
          {errors.nationalCode && <span>این فیلد الزامی است </span>}{" "}
          <input
            placeholder="تاریخ تولد"
            {...register("birthDate", { required: true })}
          />
          {errors.birthDate && <span>این فیلد الزامی است </span>}{" "}
          <input
            placeholder="جنسیت"
            {...register("gender", { required: true })}
          />
          {errors.gender && <span> این فیلد الزامی است </span>}
        </div>
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
      </form>
    </div>
  );
}

export default UserInfo;
