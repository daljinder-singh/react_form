import React, { useState } from 'react';


function App() {
	const [formData, setFormData] = useState({
		fname: '',
		cname: '',

	});
	const onSubmit = (e) => {
		e.preventDefault()
		console.log(formData);
	};
	// InputEvent: handle text who written in form
	const InputEvent = (e) => {
		const { value, name } = e.target;
		setFormData((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	};
	return (
		<>
			<form onSubmit={onSubmit}>
				<lable>Name : </lable>
				<input type='text'
					placeholder='Enter your name'
					onChange={InputEvent}
					value={formData.fname}
					// name use for show in fields and use for InputEvent
					name='fname'
				/>

				<br />

				<lable>Company : </lable>
				<input type='text'
					placeholder='Enter your company address'
					onChange={InputEvent}
					value={formData.cname}
					name='cname'
				/>
				<button>Submit</button>
			</form>
		</>
	);
}

export default App;
