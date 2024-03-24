import React from 'react';

function App() {

	const arr = [1, 2, 3, 4, 5];

	const res = arr.map((item, id) => {
		return <p key={id}>{item}</p>;
	});
	return (
		<>
		{res}
		</>
	)
}

export default App;







