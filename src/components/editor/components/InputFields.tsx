/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { emailRegex, dateRegex } from '../utils/utils';
import type { valueArray, InputTypes } from 'types';

interface Props {
	value: valueArray;
	handleChange: (
		e: React.ChangeEvent<InputTypes>,
		index: number,
		value: valueArray
	) => void;
	index: number;
}

export const InputFields = ({ value, handleChange, index }: Props) => {
	const [date, setDate] = useState<boolean>();

	useEffect(() => {
		if (typeof value[1] === 'string') {
			const result = isDate(value[1]);

			setDate(result);
		}
	}, [value]);

	const onChange = (e: React.ChangeEvent<InputTypes>) => {
		handleChange(e, index, value);
	};

	const isDate = (value: string) => {
		let validity;

		if (typeof value === 'string') {
			const dateElement = value?.split(' ')[0];

			if (dateRegex.test(dateElement) || !isNaN(Date.parse(value))) {
				validity = true;
			} else {
				validity = false;
			}
		}

		return validity;
	};

	const isEmail = (email: string) => {
		let validity;

		if (emailRegex.test(email)) {
			validity = true;
		} else {
			validity = false;
		}

		return validity;
	};

	return (
		<div>
			{typeof value[1] === 'string' ? (
				value[0] === '_id' ? (
					<label htmlFor={value[0]}>{value[0]}</label>
				) : date ? (
					<>
						<label htmlFor={value[0]}>{value[0]}</label>
						<input
							type="date"
							onChange={onChange}
							name={value[0]}
						/>
					</>
				) : isEmail(value[1]) ? (
					<>
						<label htmlFor={value[0]}>{value[0]}</label>
						<input
							id={value[0]}
							type="email"
							defaultValue={value[1]}
							name={value[0]}
							onChange={onChange}
						/>
					</>
				) : value[1].length > 80 ? (
					<>
						<label htmlFor={value[0]}>{value[0]}</label>
						<textarea
							id={value[0]}
							defaultValue={value[1]}
							name={value[0]}
							onChange={onChange}
							rows={10}
						/>
					</>
				) : value[1].length < 80 && !isEmail(value[1]) && !date ? (
					<>
						<label htmlFor={value[0]}>{value[0]}</label>
						<input
							id={value[0]}
							type="text"
							defaultValue={value[1]}
							name={value[0]}
							onChange={onChange}
						/>
					</>
				) : null
			) : null}

			{typeof value[1] === 'number' && (
				<>
					<label htmlFor={value[0]}>{value[0]}</label>
					<input
						id={value[0]}
						type="number"
						defaultValue={value[1]}
						name={value[0]}
						onChange={onChange}
					/>
				</>
			)}

			{typeof value[1] === 'boolean' && (
				<>
					<label htmlFor={value[0]}>{value[0]}</label>
					<input
						id={value[0]}
						type="radio"
						defaultChecked={value[1]}
						onChange={onChange}
					/>
				</>
			)}
		</div>
	);
};
