import React from 'react';
import styles from 'components/wrapper/styles.module.scss';
import { Item } from 'types';
import type { valueArray, InputTypes } from 'types';
import { useFormField } from './hooks/useFormField';

interface Props {
	item: Item;
	handleChange: (
		e: React.ChangeEvent<InputTypes>,
		index: number,
		value: valueArray
	) => void;
	index: number;
}

const Editor = React.memo(
	({ item, handleChange, index }: Props) => {
		const { checkValue } = useFormField();

		return (
			<div className={styles.editor}>
				{Object.entries(item).map((value: valueArray) => {
					return Array.isArray(value[1]) ? null : (
						<div key={value[0]}>
							{checkValue(value, handleChange, index)}
						</div>
					);
				})}
			</div>
		);
	},
	() => true
);

export default Editor;
