import express, {Request, Response} from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.send("Yu-Gi-Oh! Best Deck Server.");
});

router.get('/api/v1/cards', async(req: Request, res: Response) => {
	try {
		const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {headers: {'Content-Type': 'application/json'}});
		const data = await response.data;
		const cards = data.data;

		const searchKeyword = req.query.search;

		res.status(200).json(cards);
	} catch(err) {
		console.error(err);
	}
});

export default router;