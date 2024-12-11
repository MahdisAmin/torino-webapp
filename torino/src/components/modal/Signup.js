"use client";

import styles from "./Signup.module.css";
import { sendOtp } from "@/services/auth";
import { isValidMobile, toPersianNumber } from "@/utils/extras";

import { motion } from "framer-motion";
import { useState } from "react";

function Signup({ mobile, setStep, close, setMobile }) {
  const { isPending, mutate } = sendOtp();
  const [error, setError] = useState("");

  const sendCodeHandler = () => {
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");
    mutate(
      { mobile },
      {
        onSuccess: () => {
          // toast.success(data?.data?.message);
          // toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <>
      <div className={styles.modal}>
        <motion.div
          className={styles.modalContet}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.close}>
            <span onClick={close}>×</span>
          </div>
          <div className={styles.content}>
            <h2>ورود به تورینو</h2>
            <label>شماره موبایل خود را وارد کنید</label>
            <input
              placeholder={toPersianNumber("333****0912")}
              value={mobile}
              type="number"
              onChange={(e) => setMobile(e.target.value)}
            />
            {!!error && <p className={styles.error}>{error}</p>}

            <button onClick={sendCodeHandler}>ارسال کد تایید</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Signup;
