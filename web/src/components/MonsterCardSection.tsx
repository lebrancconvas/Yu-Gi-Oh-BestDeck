import React, { useState, useEffect } from 'react';
import { useAPI } from '../hooks/useAPI'; 
import { store } from '../store/store';

import { observer } from 'mobx-react';
//import _ from 'lodash';

import ICardData from '../lib/carddata.interface';

const MonsterCardSection: React.FC = () => {
	// const [searchValue, setSearchValue] = useState<string>("");

	const carddata = useAPI('http://localhost:3002/api/v1/cards'); 

	// useEffect(() => {
	// 	setSearchValue(store.searchKeyword);
	// 	console.log(searchValue);
	// }, [searchValue]);

	return(
		<div>
			{carddata.filter((card: ICardData) => card.type.includes("Monster")).filter((card: ICardData) => card.name.includes(store.searchValue)).map((card: ICardData, index: number) => {
				return(
					<div className="text-white font-mono pb-8" key={index}>
						<img src={card.card_images[0].image_url} alt={card.name} />
					</div>
				)
			})}
		</div>
	);
};

export default observer(MonsterCardSection);  