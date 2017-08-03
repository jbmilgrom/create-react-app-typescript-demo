import * as React from 'react';

interface Props {
  children: string;
}

function InputError({ children }: Props) {
  children = children ? 'This is awkward: ' + children : '';
  return (
    <div className="InputError">
      {children}
    </div>
  );
}

export default InputError;
