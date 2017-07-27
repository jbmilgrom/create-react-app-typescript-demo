import * as React from 'react';

interface Props {
  value: string;
  placeholder: string;

  handleChange(text: string): void;
}

function MyInput({value, placeholder, handleChange}: Props) {
  const _handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    handleChange(event.currentTarget.value);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={_handleChange}
    />
  );
}

export default MyInput;