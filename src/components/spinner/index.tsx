import React from 'react';
import styles from './style.module.scss';

export const Spinner = () => {
	return (
		<div className={styles.wrapper}>
			<div className="spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
