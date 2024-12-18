"use client";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import styles from "./CodeModal.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { checkOtp } from "@/core/services/mutations";
import { setCookie } from "@/utils/cookie";
export default function ReactOtpInput({ mobile, setShowModal, setStep, show }) {
  // if (!show) {
  //   return null;
  // }
  const [code, setCode] = useState("");

  const handleChange = (enteredOtp) => {
    setCode(enteredOtp);
  };
  const { isPending, mutate } = checkOtp();

  const checkCodeHandler = () => {
    if (code.length !== 6) return;
    if (isPending) return;
    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          // setShowModal()
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <div className={styles.modal}>
      <motion.div
        className={styles.modalContet}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.close}>
          <span onClick={() => setStep(1)}>
            <FaArrowLeft />
          </span>
        </div>
        <div className={styles.content}>
          <h2>کد تایید را وارد کنید</h2>
          <p>کد تایید به شماره {mobile} ارسال شد</p>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            inputStyle={styles.otpInput}
          />
          <span>تا ارسال کد مجدد</span>
          <button onClick={checkCodeHandler}>ورود به تورینو</button>
        </div>
      </motion.div>
    </div>
  );
}
