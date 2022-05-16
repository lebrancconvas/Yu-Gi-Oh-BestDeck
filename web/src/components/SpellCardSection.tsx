import React from 'react';
import { useAPI } from '../hooks/useAPI';
// import _ from 'lodash';

import CardData from '../lib/apiDataInterface';

const SpellCardSection: React.FC = () => {
	const carddata = useAPI('http://localhost:3002/api/v1/cards');

	return(
		<div>
			{carddata.filter((card: CardData) => card.type.includes("Spell")).map((card: CardData, index: number) => {
				return(
					<div className="text-white font-mono pb-8" key={index}>
						<img src={card.card_images[0].image_url} alt={card.name} />
					</div>
				)
			})}
		</div>
	);
};

export default SpellCardSection;