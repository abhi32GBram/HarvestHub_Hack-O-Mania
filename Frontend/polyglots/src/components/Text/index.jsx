import React from "react";

const sizeClasses = {
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtInterMedium18: "font-inter font-medium",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtManropeMedium16WhiteA70001: "font-manrope font-medium",
  txtManropeSemiBold24: "font-manrope font-semibold",
  txtManropeMedium16: "font-manrope font-medium",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtManropeMedium16Gray10001: "font-manrope font-medium",
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

export   { Text };
