import React from "react";

const sizeClasses = {
  txtInterRegular12: "font-inter font-normal",
  txtInterSemiBold34: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
