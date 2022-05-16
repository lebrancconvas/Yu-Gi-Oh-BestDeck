import { useState, useEffect } from 'react';
import CardData from '../lib/apiDataInterface';
import axios, { AxiosResponse } from 'axios';

export const useAPI = (url: string): CardData[] => {
	const [cardData, setCardData] = useState<CardData[]>([]);

	useEffect(() => {
		axios.get(url)
			.then((response: AxiosResponse) => response.data)
			.then(data => setCardData(data))
			.catch(err => console.error(err))
	});

	return cardData;
}