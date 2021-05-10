import React, { useState } from 'react';
// import cors from 'cors';

// cors.config();
const Home = () => {
	const [name, setName] = useState('');
	const [inputs, setInputs] = useState([{ field: '' }]);
	const [fields, setFields] = useState([
		{ Label: '--select one--', value: '' },
		{ Label: 'First Name', value: 'first_name' },
		{ Label: 'Last Name', value: 'last_name' },
		{ Label: 'Gender', value: 'gender' },
		{ Label: 'Age', value: 'age' },
		{ Label: 'Account Name', value: 'account_name' },
		{ Label: 'City ', value: 'city' },
		{ Label: 'State', value: 'state' },
	]);
	const [fieldValue, setFieldValue] = useState('');

	const handleSelectOption = (index, e) => {
		const values = [...inputs];
		setFieldValue(e.target.value);
		values[index].field = e.target.value;
	};
	const addFields = (e) => {
		e.preventDefault();
		console.log(fieldValue);
		console.log('Added');
		setInputs([...inputs, { field: '' }]);
		let fieldsArray = [...fields];
		console.log(fieldsArray);
		let result = [];
		for (let i = 0; i < fieldsArray.length; i++) {
			if (fieldsArray[i].value !== fieldValue) {
				result.push(fieldsArray[i]);
			}
		}
		console.log(result);
		setFields(result);
	};

	const postData = async () => {
		if (name) {
			let data = {
				name,
				schema: inputs,
			};
			console.log(data);
			let req = await fetch(`https://webhook.site/ff0fc696-42ec-4fac-8d7b-ca9bfbe1f3b0`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			let res = await req.json();
			console.log(res);
			window.location.pathname = '/';
		}
	};
	return (
		<div className='h1'>
			<button
				type='button'
				className='btn btn-primary'
				data-toggle='modal'
				data-target='#exampleModal'
			>
				Save segment
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content container'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								saving segment
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='form-group'>
									<label htmlFor='name' className='label'>
										Enter the name of the segment
									</label>
									<input
										type='text'
										className='form-control'
										id='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<p className='label'>
									To save your segment, you need to add the schemas to build the query
								</p>

								<div>
									{inputs.map((input, index) => {
										return (
											<div className='form-group' key={index}>
												<label htmlFor='exampleFormControlSelect1' className='label'>
													Example select
												</label>
												<select
													className='form-control'
													id='exampleFormControlSelect1'
													value={fields.field}
													onChange={(e) => handleSelectOption(index, e)}
												>
													{fields.map((field, idx) => (
														<option value={field.value} key={idx}>
															{field.Label}
														</option>
													))}
												</select>
											</div>
										);
									})}
								</div>
								<button type='button' className='btn btn-primary' onClick={addFields}>
									Add new schema
								</button>
								{/* <p>{name}</p> */}
							</form>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-primary'
								data-dismiss='modal'
								onClick={postData}
							>
								Save the segment
							</button>
							{/* <button type='button' className='btn btn-primary' onClick={postData}>
								Save the segment
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
