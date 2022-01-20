import React from 'react';

interface DetailsWrapperProps {
	property: string;
	value: string | number | boolean;
}

export const DetailsWrapper = React.memo(
	({ property, value }: DetailsWrapperProps) => {
		return (
			<div>
				<div>
					<div
						style={{
							fontWeight: 'bold',
							marginRight: '20px',
						}}
					>
						{property}
					</div>
				</div>

				<div>
					<div
						style={{
							marginRight: '20px',
						}}
					>
						{String(value)}
					</div>
				</div>
			</div>
		);
	}
);
