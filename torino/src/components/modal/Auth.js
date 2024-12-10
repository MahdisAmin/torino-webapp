"use client";
import { useState } from "react";
import Signup from "./Signup";
import ReactOtpInput from "./CodeModal";

function Auth({ show, setShowModal, onLogin }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  if (!show) {
    return null;
  }
  return (
    <div>
      {step === 1 && (
        <Signup
          setStep={setStep}
          mobile={mobile}
          close={closeModal}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <ReactOtpInput
          onLogin={onLogin}
          show={show}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default Auth;
