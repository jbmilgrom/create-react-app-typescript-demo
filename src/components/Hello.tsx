import * as React from 'react';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('A little bit louder now.');
  }
  if (enthusiasmLevel > 1000) {
    throw new Error('Woaaah... kinda enthusiastic there buddy.');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello, {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// private helpers

function getExclamationMarks(numChars: number): string {
  if (numChars < 1) {
    return '';
  }
  return '!' + getExclamationMarks(numChars - 1);
}
