import React, { useState, Suspense } from 'react';
import info from 'data/newdata.json';
import { Spinner } from 'components/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Item } from 'types';
import styles from './index.module.scss';

// --> Lazy loading to help in chunking

const Wrapper = React.lazy(() => import('components/wrapper'));

export const centerLoadingIcon = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

function App() {
	const data = info;

	const [dataCount, setDataCount] = useState({
		prev: 0,
		next: 8,
	});
	const [isMore, setIsMore] = useState(true);
	const [current, setCurrent] = useState(
		data.slice(dataCount.prev, dataCount.next)
	);
	const fetchData = () => {
		if (current.length === data.length) {
			setIsMore(false);
			return;
		}
		setTimeout(() => {
			setCurrent(
				current.concat(
					data.slice(dataCount.prev + 8, dataCount.next + 8)
				)
			);
		}, 2500);
		// eslint-disable-next-line arrow-parens
		setDataCount((prevState) => ({
			prev: prevState.prev + 8,
			next: prevState.next + 8,
		}));
	};

	return (
		<div className={styles.app}>
			<InfiniteScroll
				dataLength={current.length}
				next={fetchData}
				hasMore={isMore}
				loader={(
					<div style={centerLoadingIcon}>
						<Spinner />
					</div>
				)}
			>
				<div>
					{current &&
						current?.map((item: Item, index: number) => {
							return (
								<div key={`${item.guid}`}>
									<Suspense
										fallback={(
											<div
												style={
													centerLoadingIcon
												}
											>
												<Spinner />
											</div>
										)}
									>
										<Wrapper
											item={item}
											index={index}
											data={data}
										/>
									</Suspense>
								</div>
							);
						})}
				</div>
			</InfiniteScroll>
		</div>
	);
}

export default App;
