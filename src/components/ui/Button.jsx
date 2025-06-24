import React from "react";

const Button = ({ customClassName = "", Children }) => (
  <button className={customClassName}>{Children}</button>
);

export default Button;
