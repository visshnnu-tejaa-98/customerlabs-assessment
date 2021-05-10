import React from 'react';

const SelectInput = ({ index, fields, handleSelectOption }) => {
	return (
		<div className='input-field'>
			{/* <select className='input' onChange={() => handleSelectOption(index)}>
				<option value='' disabled selected>
					Choose your option
				</option>
				{fields.map((field, idx) => (
					<option key={idx} value={field.value}>
						{field.Label}
					</option>
				))}
			</select>

			<label>Materialize Select</label> */}
		</div>
	);
};

export default SelectInput;
