import React from 'react';
import styles from 'components/wrapper/styles.module.scss';
import { Item } from 'types';
import type { valueArray } from 'types';
import { DetailsWrapper } from './components';

interface ViewProps {
	item: Item;
}

const View = React.memo(({ item }: ViewProps) => {
	const margin = {
		marginBottom: '10px',
	};
	return (
		<div className={styles.editor}>
			{Object.entries(item).map((value: valueArray) => {
				return Array.isArray(value[1]) ? null : (
					<div
						style={margin}
						key={value[0]}
					>
						<DetailsWrapper
							property={value[0]}
							value={value[1]}
						/>
					</div>
				);
			})}
		</div>
	);
});

export default View;
