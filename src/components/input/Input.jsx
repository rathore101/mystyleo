import React from "react";

export default function Input({
  label,
  name,
  register,
  errors,
  rules,
  type = "text",
  placeholder,
  className,
}) {
  const handleBlur = (e) => {
    const labelElement = e.target.nextElementSibling;
    if (e.target.value.trim() === "") {
      labelElement.classList.remove(
        "transform",
        "-translate-y-6",
        "-translate-x-1",
        "text-[#ade741]",
        "dark:bg-[#1d1c1d]",
        "bg-[#fff]",
        "px-1"
      );
    }
  };

  const handleFocus = (e) => {
    const labelElement = e.target.nextElementSibling;
    labelElement.classList.add(
      "transform",
      "-translate-y-6",
      "-translate-x-1",
      "text-[#ade741]",
      "dark:bg-dark-first",
      "bg-[#fff]",
      "px-1"
    );
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          autoComplete="off"
          {...register(name, rules)}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder || " "}
          className={`w-full px-4 bg-transparent text-field-text-color rounded-lg border-2 py-3  ${className}
            border-[#697177] focus:outline-none focus:border-[#83d524] transition duration-200 ${
              errors[name] ? "border-red-600" : ""
            }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={errors[name] ? "true" : "false"}
        />
        <label
          htmlFor={name}
          className={`absolute pointer-events-none tracking-wide transition duration-200 top-3 px-3 left-2 text-[#677177] input-text z-50`}
        >
          {label || name}
        </label>
        {errors[name] && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {errors[name]?.message}
          </p>
        )}
      </div>
    </div>
  );
}
