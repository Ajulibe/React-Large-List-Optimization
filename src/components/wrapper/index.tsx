import React, { useState, Suspense } from 'react';
import { Item } from 'types';
import type { Data, InputTypes } from 'types';
import { centerLoadingIcon } from '../../App';
import { Spinner } from 'components/spinner';

const View = React.lazy(() => import('components/view'));
const Editor = React.lazy(() => import('components/editor'));

interface WrapperProps {
	item: Item;
	index: number;
	data: Data;
}

const Wrapper = ({ item: obj, index, data: dataInfo }: WrapperProps) => {
	const [item, setItem] = useState(obj);

	React.useEffect(() => {
		const foundItem = dataInfo.find((el: Item) => {
			return el === item;
		});

		if (foundItem) {
			setItem(foundItem);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = React.useCallback(
		(e: React.ChangeEvent<InputTypes>) => {
			// --> adjusting view

			const newItems = { ...item };

			if (e.target.type === 'number') {
				newItems[e.target.id] = Number(e.target.value);
			}

			if (e.target.type === 'radio') {
				newItems[e.target.id] =
					e.target.value === 'on';
			}

			if (
				e.target.type === 'text' ||
				e.target.type === 'textarea' ||
				e.target.type === 'email' ||
				e.target.type === 'date'
			) {
				newItems[e.target.name] = e.target.value;
			}

			setItem(newItems);
		},
		[item]
	);

	return (
		<div>
			<Suspense
				fallback={(
					<div style={centerLoadingIcon}>
						<Spinner />
					</div>
				)}
			>
				<View item={item} />
				<Editor
					item={item}
					handleChange={handleChange}
					index={index}
				/>
			</Suspense>
		</div>
	);
};

export default Wrapper;
