interface ICardSet {
	set_name: string;
	set_code: string;
	set_rarity: string;
	set_rarity_code: string;
	set_price: string;
}

interface ICardImage {
	id: number;
	image_url: string;
	image_url_small: string;
}

interface ICardPrice {
	cardmarket_price: string;
	tcgplayer_price: string;
	ebay_price: string;
	amazon_price: string;
	coolstuffinc_price: string;
}

interface ICardData {
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
	card_sets: ICardSet[];
	card_images: ICardImage[];
	card_prices: ICardPrice[];
};

export default ICardData;