import { startServer } from '@/app/app';
import { cpus } from 'os';
import * as _cluster from 'node:cluster';
const cluster = _cluster as unknown as _cluster.Cluster;
const workers = cpus().length;
enum ENV {
	DEV = 'DEVELOPMENT',
	PROD = 'PRODUCTION',
}
startServer();
// if (process.env.ENV == ENV.DEV) {
// } else {
// 	if (cluster.isPrimary) {
// 		for (let w of new Array(workers)) cluster.fork();
// 		cluster.on('exit', cluster.fork);
// 	} else {
// 		startServer();
// 	}
// }
