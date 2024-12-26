import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/datePickerCss/datepicker.css";

const Calendar = ({ name, value, onChange, onBlur, error, touched, className,label }) => {
  const handleDateChange = (date) => {
    onChange({ target: { name, value: date } });
  };

  return (
    <div className="relative pt-3   ">
      <label htmlFor={name} className="block text-sm poppins-regular text-gray-700">
        {label}
      </label>
      <DatePicker
        selected={value}  
        onChange={handleDateChange}
        onBlur={onBlur}
        name={name}
        id={name}
        className={`w-full mt-3 p-[0.6rem] border border-gray-300 rounded-lg focus-within:border-custom-lightBlue bg-custom-white ${className}`}
        dateFormat="dd/MM/yyyy"
      />
      {touched && error && (
        <div className="text-red-500 mt-1 text-xs">{error}</div>
      )}
    </div>
  );
};

export default Calendar;
