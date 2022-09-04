import React, { useState } from 'react';


function App() {
	const [name, setName] = useState({
		fname: '',
		cname: '',

	});
	const onSubmits = (e) => {
		e.preventDefault();
	};
	// InputEvent: handle text who written in form
	const InputEvent = (e) => {
		// console.log(e.target.value);
		//console.log(e.target.placeholder);
		// name use below in form and value is == text value
		const { value, name } = e.target;


		setName((preValue) => {
			// console.log(preValue);
			return {
				...preValue,
				[name]: value,
			}
		})
	};
	return (
		<>
			<form onSubmit={onSubmits}>
				<lable>Name : </lable>
				<input type='text'
					placeholder='Enter your name'
					onChange={InputEvent}
					value={name.fname}
					// name use for show in fields and use for InputEvent
					name='fname'
				/>

				<br />

				<lable>Company : </lable>
				<input type='text'
					placeholder='Enter your company address'
					onChange={InputEvent}
					value={name.cname}
					name='cname'
				/>
				<button>Submit</button>
			</form>
		</>
	);
}

export default App;
