/* eslint-disable indent */
import React, { Suspense, useState } from 'react';
import info from 'data/data.json';
import styles from 'components/wrapper/styles.module.scss';
import { Spinner } from 'components/spinner';
import Wrapper from 'components/wrapper';

// type Friends = {
// 	id: number;
// 	name: string;
// };

// type value = string | number | boolean | string[] | Friends[];
// interface Item {
// 	[key: string]: value;
// }

// type Data = Item[];

// interface newItem {
// 	[key: string]: any;
// }

// interface FormfeildsProps {
// 	property: string;
// 	onChange: (e: any) => void;
// 	index?: any;
// 	data?: any;
// }

// const Formfeilds = React.memo(
// 	({ property, onChange }: FormfeildsProps) => {
// 		console.log('rendering guy');
// 		return (
// 			<>
// 				<label htmlFor={property}>{property}</label>
// 				<input
// 					id={property}
// 					type="number"
// 					// defaultValue={Number(data[index][property])}
// 					// value={Number(data[index][property])}
// 					name={property}
// 					onChange={onChange}
// 				/>
// 			</>
// 		);
// 	},
// 	(prev, nxt) => true
// );

// interface Props {
// 	item: newItem;
// 	handleChange: (e: any, index: any, value: any) => void;
// 	index: any;
// 	data: any;
// }

// const Editor = React.memo(
// 	({ item, handleChange, index, data }: Props) => {
// 		const checkValue = React.useCallback(
// 			(value: any, handleChange: any, index: any) => {
// 				const onChange = (e: any) => {
// 					handleChange(e, index, value);
// 				};

// 				const dateRegex =
// 					/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/g;

// 				let emailRegex =
// 					// eslint-disable-next-line no-useless-escape
// 					/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 				const isDate = (value: string) => {
// 					let validity;

// 					const dateElement: any =
// 						typeof value === 'string' && value?.split(' ')[0];

// 					if (dateRegex.test(dateElement)) {
// 						validity = true;
// 					} else {
// 						validity = false;
// 					}

// 					return validity;
// 				};

// 				const isEmail = (email: string) => {
// 					let validity;

// 					if (emailRegex.test(email)) {
// 						validity = true;
// 					} else {
// 						validity = false;
// 					}

// 					return validity;
// 				};

// 				switch (typeof value[1]) {
// 					case 'string':
// 						if (value[0] === '_id') {
// 							return (
// 								<label htmlFor={value[0]}>
// 									{value[0]}
// 								</label>
// 							);
// 						}

// 						if (isDate(value[1])) {
// 							return (
// 								<>
// 									<label htmlFor={value[0]}>
// 										{value[0]}
// 									</label>
// 									<input
// 										type="date"
// 										onChange={onChange}
// 										name={value[0]}
// 									/>
// 								</>
// 							);
// 						}

// 						if (isEmail(value[1])) {
// 							return (
// 								<>
// 									<label htmlFor={value[0]}>
// 										{value[0]}
// 									</label>
// 									<input
// 										id={value[0]}
// 										type="email"
// 										defaultValue={value[1]}
// 										name={value[0]}
// 										onChange={onChange}
// 									/>
// 								</>
// 							);
// 						}
// 						if (value[1].length > 255) {
// 							return (
// 								<>
// 									<label htmlFor={value[0]}>
// 										{value[0]}
// 									</label>
// 									<textarea
// 										id={value[0]}
// 										defaultValue={value[1]}
// 										name={value[0]}
// 										onChange={onChange}
// 										rows={10}
// 									/>
// 								</>
// 							);
// 						}

// 						return (
// 							<>
// 								<label htmlFor={value[0]}>
// 									{value[0]}
// 								</label>
// 								<input
// 									id={value[0]}
// 									type="text"
// 									defaultValue={value[1]}
// 									// value={data[index][value[0]]}
// 									name={value[0]}
// 									onChange={onChange}
// 								/>
// 							</>
// 						);

// 					case 'number':
// 						return (
// 							<>
// 								<label htmlFor={value[0]}>
// 									{value[0]}
// 								</label>
// 								<input
// 									id={value[0]}
// 									type="number"
// 									defaultValue={value[1]}
// 									// value={Number(data[index][value[0]])}
// 									name={value[0]}
// 									onChange={onChange}
// 								/>

// 								{/* <Formfeilds
// 								property={value[0]}
// 								onChange={onChange}
// 								index={index}
// 								data={data}
// 							/> */}
// 							</>
// 						);

// 					case 'boolean':
// 						return (
// 							<>
// 								<label htmlFor={value[0]}>
// 									{value[0]}
// 								</label>
// 								<input
// 									id={value[0]}
// 									type="radio"
// 									checked={value[1]}
// 									onChange={onChange}
// 								/>
// 							</>
// 						);

// 					default:
// 						break;
// 				}

// 				return null;
// 			},
// 			[]
// 		);

// 		return (
// 			<div className={styles.editor}>
// 				{Object.entries(item).map((value: any) => {
// 					return Array.isArray(value[1]) ? null : (
// 						<div key={value[0]}>
// 							{checkValue(value, handleChange, index)}
// 						</div>
// 					);
// 				})}
// 			</div>
// 		);
// 	},
// 	(prev, nxt) => true
// );

// interface DetailsWrapperProps {
// 	property: string;
// 	value: string | number | boolean;
// }

// const DetailsWrapper = React.memo(
// 	({ property, value }: DetailsWrapperProps) => {
// 		return (
// 			<div>
// 				<div>
// 					<div
// 						style={{
// 							fontWeight: 'bold',
// 							marginRight: '20px',
// 						}}
// 					>
// 						{property}
// 					</div>
// 				</div>

// 				<div>
// 					<div
// 						style={{
// 							marginRight: '20px',
// 						}}
// 					>
// 						{String(value)}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// );

// interface ViewProps {
// 	item: newItem;
// }

// const View = React.memo(({ item }: ViewProps) => {
// 	return (
// 		<div className={styles.editor}>
// 			{Object.entries(item).map((value: any) => {
// 				return Array.isArray(value[1]) ? null : (
// 					<div key={value[0]} style={{ marginBottom: '10px' }}>
// 						<DetailsWrapper
// 							property={value[0]}
// 							value={value[1]}
// 						/>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// });

// interface WrapperProps {
// 	item: newItem;
// 	index: any;
// 	data: any;
// }

// const Wrapper = ({ item: obj, index, data: dataInfo }: WrapperProps) => {
// 	const [data, setData] = useState<Data>(dataInfo);
// 	const [item, setItem] = useState(obj);

// 	React.useEffect(() => {
// 		const foundItem = dataInfo.find((el: any) => {
// 			return el === item;
// 		});

// 		setItem(foundItem);
// 	}, []);

// 	const handleChange = React.useCallback(
// 		(e: any, index: any, value: any) => {
// 			const newValues = [...data];

// 			// console.log(e.target.value, 'date');

// 			// if (e.target.type === 'number') {
// 			// 	console.log();
// 			// 	newValues[index][e.target.id] = Number(e.target.value);
// 			// } else if (e.target.type === 'radio') {
// 			// 	newValues[index][e.target.id] = e.target.checked;
// 			// } else {
// 			// 	newValues[index][e.target.name] = e.target.value;
// 			// }

// 			// setData(newValues);

// 			//--> adjusting view
// 			const newItems = { ...item };

// 			if (e.target.type === 'number') {
// 				newItems[e.target.id] = e.target.value;
// 			}

// 			if (e.target.type === 'radio') {
// 				newItems[e.target.id] = e.target.checked;
// 			}

// 			if (
// 				e.target.type === 'text' ||
// 				e.target.type === 'textarea' ||
// 				e.target.type === 'email' ||
// 				e.target.type === 'date'
// 			) {
// 				newItems[e.target.name] = e.target.value;
// 			}

// 			setItem(newItems);
// 		},
// 		[data, item]
// 	);

// 	return (
// 		<div key={`${item?._id}`}>
// 			<View item={item} />
// 			<Editor
// 				item={item}
// 				handleChange={handleChange}
// 				index={index}
// 				data={data}
// 			/>
// 		</div>
// 	);
// };

// function App() {
// 	const data = info;

// 	const centerLoadingIcon = {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	};

// 	return (
// 		<div>
// 			<div>
// 				{data?.map((item: any, index: any) => {
// 					return (
// 						<div key={`${item.guid}`}>
// 							<Suspense
// 								fallback={
// 									<div style={centerLoadingIcon}>
// 										<Spinner />
// 									</div>
// 								}
// 							>
// 								<Wrapper
// 									item={item}
// 									index={index}
// 									data={data}
// 								/>
// 							</Suspense>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }

// export default App;
