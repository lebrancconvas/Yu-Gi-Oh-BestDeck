import { useState, useEffect } from 'react';
import ICardData from '../lib/carddata.interface';
import axios, { AxiosResponse } from 'axios';

export const useAPI = (url: string): ICardData[] => {
	const [cardData, setCardData] = useState<ICardData[]>([]);

	useEffect(() => {
		axios.get(url)
			.then((response: AxiosResponse) => response.data)
			.then(data => setCardData(data))
			.catch(err => console.error(err))
	});

	return cardData;
}