"use client";
import styles from "./User.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaUser } from "react-icons/fa6";
function UserInfo() {
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
        <div className={styles.tourCard}>
          <button type="submit"> ثبت و خرید نهایی </button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
