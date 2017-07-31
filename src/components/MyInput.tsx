import * as React from 'react';

interface Props {
  value?: string;
  placeholder: string;

  handleChange(text: string): void;
}

function MyInput({value, placeholder, handleChange}: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={withHTMLInputElementValue(handleChange)}
    />
  );
}

export default MyInput;

// private helpers

function withHTMLInputElementValue(cb: (text: string) => void) {
  return (event: React.FormEvent<HTMLInputElement>) => cb(event.currentTarget.value);
}