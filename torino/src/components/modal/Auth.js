"use client";
import { useState } from "react";
import Signup from "./Signup";
import ReactOtpInput from "./CodeModal";
import { useGetUserData } from "@/core/services/query";
import Styels from "../../app/layout.module.css";
import { toPersianNumber } from "@/utils/extras";
import { FaChevronDown, FaUser } from "react-icons/fa6";
import Dropdown from "../element/Dropdown";


function Auth() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown , setShowDropdown]=useState(false)
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const { isPending, data } = useGetUserData();
  const phoneNumber = data?.data.mobile;
  const enterHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const dropDownHandler = () => {
   setShowDropdown(!showDropdown)
    
  }

  if (isPending && !data?.data) return <h4>Loading...</h4>;
  if (data?.data)
    return (
      <div className={Styels.link} onClick={dropDownHandler}>
        <h4>
          <FaUser
            style={{
              marginLeft: "5px",
              fontSize: "15px",
              marginBottom: "-2px",
            }}
          />
          {toPersianNumber(phoneNumber)}
          <FaChevronDown
            style={{
              marginBottom: "-2px",
              marginRight: "5px",
              fontSize: "15px",
            }}
          />
        </h4>
        <Dropdown show={showDropdown} phone={phoneNumber} />
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
