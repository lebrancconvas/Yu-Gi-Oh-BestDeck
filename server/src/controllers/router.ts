import express, {Request, Response} from 'express';
import axios from 'axios';
import cors from 'cors';

const router = express.Router();

router.use(cors());

router.get('/', (req: Request, res: Response) => {
	res.send("Yu-Gi-Oh! Best Deck Server.");
});

router.get('/api/v1/cards', async(req: Request, res: Response) => {
	try {
		const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {headers: {'Content-Type': 'application/json'}});
		const data = await response.data;
		const cards = data.data;

		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(cards);
	} catch(err) {
		console.error(err);
	}
});

router.get('/api/v1/cards/monster-cards', async(req: Request, res: Response) => {
	try {
		const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {headers: {'Content-Type': 'application/json'}});
		const data = await response.data;
		const cards = data.data.filter((card: any) => card.type.includes('Monster'));
		const searchkeyword = req.query.search;

		res.setHeader('Content-Type', 'application/json');
		if(searchkeyword !== undefined) {
			res.status(200).json(cards.filter((card: any) => card.name.includes(searchkeyword)));
		} else {
			res.status(200).json(cards);
		}
	} catch(err) {
		console.error(err);
	}
});

router.get('/api/v1/cards/spell-cards', async(req: Request, res: Response) => {
	try {
		const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {headers: {'Content-Type': 'application/json'}});
		const data = await response.data;
		const cards = data.data.filter((card: any) => card.type.includes('Spell'));
		const searchkeyword = req.query.search;

		res.setHeader('Content-Type', 'application/json');
		if(searchkeyword !== undefined) {
			res.status(200).json(cards.filter((card: any) => card.name.includes(searchkeyword)));
		} else {
			res.status(200).json(cards);
		}
	} catch(err) {
		console.error(err);
	}
});

router.get('/api/v1/cards/trap-cards', async(req: Request, res: Response) => {
	try {
		const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {headers: {'Content-Type': 'application/json'}});
		const data = await response.data;
		const cards = data.data.filter((card: any) => card.type.includes('Trap'));
		const searchkeyword = req.query.search;

		res.setHeader('Content-Type', 'application/json');
		if(searchkeyword !== undefined) {
			res.status(200).json(cards.filter((card: any) => card.name.includes(searchkeyword)));
		} else {
			res.status(200).json(cards);
		}
	} catch(err) {
		console.error(err);
	}
});


export default router;  