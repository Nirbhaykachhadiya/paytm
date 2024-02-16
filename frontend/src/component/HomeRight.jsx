//import { useState } from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HomeRight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [clickSignIn, setClickSignIn] = useState(true);

  const onSubmit = (data) => {
    console.log("form submitted", data);
    reset(); // Reset form after submission
  };

  return (
    <>
      <div className="w-6/12 bg-[#00BCF1]">
        <div className="mx-36 mt-28 pt-12 h-[500px] bg-white shadow-lg">
          <div className="mx-20  h-[400px]  border shadow-lg ">
            <div className=" h-[50px]  bg-white">
              <button
                onClick={() => setClickSignIn(true)}
                className={`w-6/12 font-sans font-bold text-xl h-[49px] ${
                  clickSignIn
                    ? "bg-[#00BCF1] rounded-r-lg text-white"
                    : "bg-white"
                }`}
              >
                SignIn
              </button>
              <button
                onClick={() => setClickSignIn(false)}
                className={`w-6/12 font-sans font-bold text-xl h-[49px] ${
                  clickSignIn
                    ? "bg-white "
                    : "bg-[#00BCF1] rounded-l-lg text-white"
                }`}
              >
                SignUp
              </button>
            </div>

            <div className="bg-[#00BCF1] h-[350px] pl-7 pt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                  <label
                    htmlFor="userName"
                    className="text-white text-xl font-sans font-semibold"
                  >
                    UserName{" "}
                  </label>
                  <input
                    id="userName"
                    {...register("userName", {
                      required: "Username is required",
                    })}
                    className="border text-center rounded-l-lg "
                    type="text"
                    placeholder="Enter Your UserName"
                  />
                  {errors.userName && (
                    <span className="text-red-500">
                      {errors.userName.message}
                    </span>
                  )}
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="text-white text-xl  font-sans font-semibold"
                  >
                    PassWord{" "}
                  </label>
                  <input
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="border ml-1 rounded-l-lg text-center "
                    type="password"
                    placeholder="Enter Your Password"
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <button
                  className="px-14 py-1 mt-10 font-semibold  font-sans  text-xl text-center ml-14 bg-white rounded-lg shadow-lg text-[#012A72]"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRight;
