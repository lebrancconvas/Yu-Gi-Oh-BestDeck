interface CardSet {
	set_name: string;
	set_code: string;
	set_rarity: string;
	set_rarity_code: string;
	set_price: string;
}

interface CardImage {
	id: number;
	image_url: string;
	image_url_small: string;
}

interface CardPrice {
	cardmarket_price: string;
	tcgplayer_price: string;
	ebay_price: string;
	amazon_price: string;
	coolstuffinc_price: string;
}

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
	card_sets: CardSet[];
	card_images: CardImage[];
	card_prices: CardPrice[];
};

export default CardData;