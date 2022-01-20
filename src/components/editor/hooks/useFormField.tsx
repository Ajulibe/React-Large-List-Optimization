/* NOT IN USE. disabled for performance reasons  */
import React from 'react';
import { emailRegex, dateRegex } from '../utils/utils';
import type { valueArray, InputTypes } from 'types';

export const useFormField = () => {
	const checkValue = React.useCallback(
		(
			value: valueArray,
			handleChange: (
				e: React.ChangeEvent<InputTypes>,
				index: number,
				value: valueArray
			) => void,
			index: number
		) => {
			const onChange = (e: React.ChangeEvent<InputTypes>) => {
				handleChange(e, index, value);
			};

			const isDate = (value: string) => {
				let validity;

				if (typeof value === 'string') {
					const dateElement = value?.split(' ')[0];

					if (dateRegex.test(dateElement)) {
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
			console.log(typeof value[1], 'hook', value[1]);

			switch (typeof value[1]) {
			case 'string':
				if (value[0] === '_id') {
					return (
						<label htmlFor={value[0]}>{value[0]}</label>
					);
				}

				if (isDate(value[1])) {
					return (
						<>
							<label htmlFor={value[0]}>
								{value[0]}
							</label>
							<input
								type="date"
								onChange={onChange}
								name={value[0]}
							/>
						</>
					);
				}

				if (isEmail(value[1])) {
					return (
						<>
							<label htmlFor={value[0]}>
								{value[0]}
							</label>
							<input
								id={value[0]}
								type="email"
								defaultValue={value[1]}
								name={value[0]}
								onChange={onChange}
							/>
						</>
					);
				}
				if (value[1].length > 255) {
					return (
						<>
							<label htmlFor={value[0]}>
								{value[0]}
							</label>
							<textarea
								id={value[0]}
								defaultValue={value[1]}
								name={value[0]}
								onChange={onChange}
								rows={10}
							/>
						</>
					);
				}

				return (
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
				);

			case 'number':
				return (
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
				);

			case 'boolean':
				return (
					<>
						<label htmlFor={value[0]}>{value[0]}</label>
						<input
							id={value[0]}
							type="radio"
							defaultChecked={value[1]}
							onChange={onChange}
						/>
					</>
				);

			default:
				break;
			}

			return null;
		},
		[]
	);

	return { checkValue };
};
