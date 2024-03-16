import React from "react";

const Button = ({ text, classes }) => {
  return (
    <button
      className={`bg-yellow-500 text-white px-6 py-2 rounded-md ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
