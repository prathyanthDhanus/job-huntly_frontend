import React from "react";

const CustomFileInput = ({
  title,
  accept,
  onChange,
  onBlur,
  name,
  className = "",
  error,
  touched,
}) => {
  return (
    <div className="pt-3 sm:text-sm md:text-sm lg:text-base poppins-light bg-white">
      <div className="flex justify-between">
        <h5 className="poppins-light">{title}</h5>
      </div>
      <div
        className={`w-full flex items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-custom-lightBlue bg-custom-white ${className}`}
      >
        <input
          type="file"
          accept={accept} // Control the file types allowed
          onChange={(e) => {
            const file = e.target.files[0];
            onChange(name, file); // Pass the file and field name to Formik's setFieldValue
          }}
          onBlur={onBlur}
          name={name}
          className="border-none outline-none w-full text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-md"
        />
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs md:text-xs lg:text-xs xl:text-xs xxl:text-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomFileInput;
