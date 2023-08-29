import React from "react";
import { useState, useRef } from "react";
import logo from "../../assets/SailInnovationLogo.png";
import PinInput from "react-pin-input";
import Modal from "../../Components/Modal";
import { Form } from "antd";
import ModalContent from "./ResetModal";

const Reset = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();

    const resetPasswordData = {
      otp,
      email,
      password,
    };


    const url = "https://ssmp-api.onrender.com/api/v1/user/resetPassword";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( resetPasswordData ),
      });

      if (response.ok) {
        // Handle successful password reset
        openModal();
        console.log('Password reset successful.');

      } else {
        // Handle error
        console.error("Password reset failed");
      }
    } catch (error) {
      console.error("An error occured ", error);
    }
  };

  const numberOfPinInputs = 4; // Change this to the desired number of inputs

  const pinRefs = Array.from({ length: numberOfPinInputs }, () => React.createRef());

  const handlePinChange = (index) => (value) => {
    if (value.length === 1 && index < pinRefs.length - 1) {
      pinRefs[index + 1].current.focus();
    } else if (value.length === 0 && index > 0) {
      pinRefs[index - 1].current.focus();
    }
    // Handle your state management here if needed
  };
  

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-white">
      <div className=" ">
        <div className=" absolute top-0 left-0 p-4">
          <img className="mx-auto h-16 w-auto" src={logo} alt="logo" />
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Reset your password
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6" method="POST" onSubmit={handleSubmit}>
          <div>
            <div className=" mb-4">
              <h2 className="text-sm font-medium mb-3">Enter Your 4 digit OTP</h2>
              <div className=" flex gap-6 justify-center">
                {pinRefs.map((ref, index) => (
                  <PinInput
                    key={index}
                    length={1}
                    initialValue=""
                    secret
                    ref={ref}
                    onChange={handlePinChange(index)}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                E-mail
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-black"
              >
                New Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              // onClick={openModal}
              className="flex w-full justify-center rounded-md  bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reset Password
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Reset;
