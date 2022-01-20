import React from 'react';

interface DetailsWrapperProps {
	property: string;
	value: string | number | boolean;
}

export const DetailsWrapper = React.memo(
	({ property, value }: DetailsWrapperProps) => {
		return (
			<div style={{ borderBottom: '1px solid grey' }}>
				<div>
					<div
						style={{
							fontWeight: 'bold',
							marginRight: '20px',
							textTransform: 'uppercase',
							marginBottom: '20px',
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
