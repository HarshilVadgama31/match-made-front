import React from "react";
import useFormContext from "../hooks/useFormContext";

function InputField({ id, placeholder, type, required }) {
  const { handleChange } = useFormContext();

  return (
    <>
      {required ? (
        <input
          type={type}
          id={id}
          className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
          placeholder={placeholder}
          onChange={handleChange}
          
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          className="flex ml-1 bg-bg_light border border-button_light hover:ring-4 hover:ring-button_light text-gray-900 text-lg rounded-lg w-full p-2.5 dark:bg-[#17212e] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-4 dark:hover:ring-button_dark"
          placeholder={placeholder}
          onChange={handleChange}
          
        />
      )}
    </>
  );
}

export default InputField;
