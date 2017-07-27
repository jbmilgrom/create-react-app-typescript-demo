import * as React from 'react';

interface Props {
  value: string;

  handleChange(text: string): void;
}

function MyInput({value, handleChange}: Props) {
  const _handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    handleChange(event.currentTarget.value);
  };
  return (
    <input
      type="text"
      placeholder={value}
      value={value}
      onChange={_handleChange}
    />
  );
}

export default MyInput;