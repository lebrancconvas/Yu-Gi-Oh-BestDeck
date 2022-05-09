import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';
import _ from 'lodash';

interface CardData {
	id: number;
	name: string;
	type: string;
	desc: string;
	atk?: number;
	def?: number;
	level?: number;
	race: string;
	attribute?: string;
	archetype: string;
	card_sets?: unknown;
	card_images?: unknown;
	card_prices?: unknown;
};

const MonsterCardSection: React.FC = () => {
	const [carddata, setCarddata] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3002/api/v1/cards', {headers: {'Content-Type': 'application/'}})
			.then((response: AxiosResponse) => response.data)
			.then(data => setCarddata(data))
			.catch(err => console.error(err))
	})

	return(
		<div>
			{carddata.filter((card: CardData) => card.type.includes("Monster")).map((card: CardData, index: number) => {
				return(
					<div className="text-white font-mono" key={index}>
						{card.name}
					</div>
				)
			})}
		</div>
	);
};

export default MonsterCardSection;