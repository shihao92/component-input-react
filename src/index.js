import React from 'react';

const CustomInput = ({
  style,
  className,
  placeholder,
  type,
  value,
  onChange,
  onChangeValue
}) => {
  return (
    <input
      style={ style }
      className={ className }
      placeholder={ placeholder }
      type={ type }
      value={ value }
      onChange={ onChange }
      onChangeValue={ onChangeValue } />
  )
};

export default CustomInput;