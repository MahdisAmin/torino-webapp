"use client";
import { useState } from "react";
import Signup from "./Signup";
import ReactOtpInput from "./CodeModal";
import { useGetUserData } from "@/core/services/query";
import Styels from "../../app/layout.module.css";
import { toPersianNumber } from "@/utils/extras";

function Auth() {
  const [showModal, setShowModal] = useState(false);

  const enterHandler = () => {
    setShowModal(true);
  };
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const { isPending, data } = useGetUserData();

  const closeModal = () => {
    setShowModal(false);
  };

  if (isPending && !data?.data) return <h4>Loading...</h4>;
  if (data?.data)
    return (
      <div className={Styels.link}>
        <select>
          <option>{toPersianNumber(data?.data.mobile)}</option>
          <option>حساب کاربری</option>
        </select>
      </div>
    );
  return (
    <div>
      <div className={Styels.link}>
        <button onClick={enterHandler}>
          <span>
            <img src="/images/profile.png" />
            ورود | ثبت نام
          </span>
        </button>
      </div>
      {step === 1 && (
        <Signup
          setStep={setStep}
          mobile={mobile}
          close={closeModal}
          show={showModal}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <ReactOtpInput
          // show={showModal}
          setShowModal={setShowModal}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default Auth;
