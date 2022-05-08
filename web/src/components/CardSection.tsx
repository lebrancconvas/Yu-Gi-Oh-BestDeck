import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

const CardSection: React.FC = () => {
	const [carddata, setCarddata] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3002/api/v1/cards/monster-cards', {headers: {'Content-Type': 'application/'}})
			.then((response: AxiosResponse) => response.data)
			.then(data => setCarddata(data))
			.catch(err => console.error(err))
	})

	return(
		<div>
			<h1 className="text-white text-2xl">Card List</h1>
			{carddata.map((card: any, index: number) => {
				return(
					<div className="text-white font-mono" key={index}>
						{card.name}
					</div>
				)
			})}
		</div>
	);
};

export default CardSection;