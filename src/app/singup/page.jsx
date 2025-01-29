"use client";
import React from "react";
import Input from "@/components/input/Input";
import { useForm } from "react-hook-form";

function Singup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-full flex justify-center items-center my-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-96 shadow-xl p-4 rounded-lg bg-white dark:bg-dark-first dark:text-dark-four"
      >
        <h2 className=" flex justify-center items-center text-2xl font-bold">
          SingUp
        </h2>
        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email",
            },
          }}
        />
        <Input
          label="userName"
          name="username"
          type="text"
          register={register}
          errors={errors}
          rules={{
            required: "username is required",
            minLength: {
              value: 4,
              message: "username must be at least 4 characters",
            },
          }}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          errors={errors}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#83d524] text-white rounded-lg hover:bg-[#6fb71c] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Singup;
