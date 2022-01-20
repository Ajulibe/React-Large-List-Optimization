import React from 'react';
import styles from 'components/wrapper/styles.module.scss';
import { Item } from 'types';
import type { valueArray, InputTypes } from 'types';
import { InputFields } from './components/InputFields';

interface Props {
	item: Item;
	handleChange: (
		e: React.ChangeEvent<InputTypes>,
		index: number,
		value: valueArray
	) => void;
	index: number;
}

const Editor = React.memo(({ item, handleChange, index }: Props) => {
	return (
		<div className={styles.editor}>
			{Object.entries(item).map((value: valueArray) => {
				return Array.isArray(value[1]) ? null : (
					<div key={value[0]}>
						<InputFields
							value={value}
							handleChange={handleChange}
							index={index}
						/>
					</div>
				);
			})}
		</div>
	);
});

export default Editor;
