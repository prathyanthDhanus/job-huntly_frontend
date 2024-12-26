import React, { useState } from "react";

const Dropdown = ({
  buttonLabel,
  menuItems,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  className,
  dropDownTitile
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedValue) => {
    onChange({ target: { name, value: selectedValue } });
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left poppins-light mt-3">
      <p>{dropDownTitile}</p>
      <button
        onClick={toggleDropdown}
        className={`w-full flex items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-custom-lightBlue  text-xs  md:text-sm lg:text-sm xl:text-sm xxl:text-md bg-custom-white justify-between ${className}`}
        type="button"
        onBlur={onBlur}
        name={name}
      >
        {value || buttonLabel}
        <svg
          className="w-2.5 h-2.5 ms-3 mx-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 absolute mt-2  bg-white divide-y divide-gray-100 rounded-lg shadow w-full ">
          <ul className="py-2 text-sm  ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.value)}
                  className="block w-full text-left px-4 py-2 "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs md:text-sm">{error}</div>
      )}
    </div>
  );
};

export default Dropdown;
