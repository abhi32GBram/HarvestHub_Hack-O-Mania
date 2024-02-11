import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  gradient: { gray_700_23_gray_700_00: "bg-gradient  text-gray-200" },
  fill: { gray_800_a3: "bg-gray-800_a3 text-gray-200" },
};
const sizes = { xs: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf(["gray_700_23_gray_700_00", "gray_800_a3"]),
};

export { Button };
