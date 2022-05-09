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

export default CardData;