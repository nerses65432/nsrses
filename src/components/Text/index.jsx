import React from "react";

const sizeClasses = {
  txtPlayfairDisplayRomanRegular13: "font-normal font-playfairdisplay",
  txtPlayfairDisplayRomanRegular12: "font-normal font-playfairdisplay",
  txtPlayfairDisplayRomanRegular16: "font-normal font-playfairdisplay",
  txtPlayfairDisplayRomanRegular128: "font-normal font-playfairdisplay",
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
