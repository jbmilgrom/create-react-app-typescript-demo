import * as React from 'react';

interface Props {
  message: string;
}

function InputError({message}: Props) {
  message = message ? 'This is awkward: ' + message : '';
  return (
    <div className="InputError">{message}</div>
  );
}

export default InputError;