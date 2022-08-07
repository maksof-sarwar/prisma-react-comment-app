import { errorHelper } from '@/app/helpers/apiError';
import { startServer } from '@/server';
import { cpus } from 'os';
import * as _cluster from 'node:cluster';
const cluster = _cluster as unknown as _cluster.Cluster;
const workers = cpus().length;

if (cluster.isPrimary) {
	for (let w of new Array(workers)) cluster.fork();
	cluster.on('exit', cluster.fork);
} else {
	startServer();
}
