import * as React from 'react';
import './Hello.css';

// write out an interface for the props we will be passing down to our component/function
export interface Props {
	name: string;
	enthusiasmLevel?: number;
}

// this is an example of a stateless functional component. It has no need to maintain any kind of state, and is
// a dumb 'presentational' component that simply consumes its props and renders (returns)
// these are useful for their simplicity and are also easier to test (easier to predict/assert IO)
// Also, less reliance on classes, no reliance on weird context/lexical scoping issues. No need to explicitly
// bind context, pass around 'this'
function Hello({name, enthusiasmLevel = 1}: Props) {
	if (enthusiasmLevel <= 0) {
		throw new Error('Ya blew it!');
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

function getExclamationMarks(numChars: number) {
	return Array(numChars + 1).join('!');
}