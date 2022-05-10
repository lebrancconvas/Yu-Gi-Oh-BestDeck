import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
// import _ from 'lodash';

import CardData from '../lib/apiDataInterface';

const SpellCardSection: React.FC = () => {
	const [carddata, setCarddata] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3002/api/v1/cards', {headers: {'Content-Type': 'application/'}})
			.then((response: AxiosResponse) => response.data)
			.then(data => setCarddata(data))
			.catch(err => console.error(err))
	}, []);

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