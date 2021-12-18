import React, { useState } from 'react';
import data from './data';
function App() {
	const [loremText, setLoremText] = useState([]);
	const [count, setCount] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();
		let arr = [];
		if (count === 0) return setLoremText(arr);
		for (let j = 0; j < count; j++) {
			arr.push(data[j % data.length]);
		}
		setLoremText(arr);
	}
	return (
		<section className='section-center' onSubmit={handleSubmit}>
			<h3>TIRED OF BORING LOREM IPSUM?</h3>
			<form className='lorem-form'>
				<label htmlFor='amount'>Paragraphs : </label>
				<input type='number' id='amount' name='amount' onChange={(e) => setCount(parseInt(e.target.value))} min='0' />
				<button className='btn' type='submit'>
					Generate
				</button>
			</form>
			{loremText.map((text, index) => {
				return (
					<article className='result' key={index}>
						{text}
					</article>
				);
			})}
		</section>
	);
}

export default App;
