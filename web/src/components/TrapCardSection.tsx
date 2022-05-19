import React from 'react';
import { useAPI } from '../hooks/useAPI';
// import _ from 'lodash';

import ICardData from '../lib/carddata.interface';

const TrapCardSection: React.FC = () => {
	const carddata = useAPI('http://localhost:3002/api/v1/cards');

	return(
		<div>
			{carddata.filter((card: ICardData) => card.type.includes("Trap")).map((card: ICardData, index: number) => {
				return(
					<div className="text-white font-mono pb-8" key={index}>
						<div className="font-bold text-size-2xl">
							<img src={card.card_images[0].image_url} alt={card.name} />
						</div>
					</div>
				)
			})}
		</div>
	);
};

export default TrapCardSection;