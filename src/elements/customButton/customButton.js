import React from "react";

import "./styles.scss";

const CustomButton = ({
  children,
  isBlueButton,
  isCartButton,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${isBlueButton ? "blue-button" : ""} ${
        isCartButton ? "cart" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
