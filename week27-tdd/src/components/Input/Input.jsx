import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        outline: props.outline,
        borderRadius: props.borderRadius,
        padding: props.padding,
        borderColor: props.borderColor,
      }}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
