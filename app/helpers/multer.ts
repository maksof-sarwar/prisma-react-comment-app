import multer from 'fastify-multer';
import { v4 as uuid } from 'uuid';
const requestId = uuid();
let storage = multer.diskStorage({
	filename: (req, file, cb) => {
		file.filename = requestId + '_' + file.originalname;
		cb(null, file.filename);
	},
});

export default multer({ storage });
