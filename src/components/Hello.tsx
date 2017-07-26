import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Please be more enthusiastic next time tho');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );

}

export default Hello;

// private helpers

function getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join('!');
}
