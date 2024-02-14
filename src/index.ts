import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyView from '@fastify/view';
import path from 'path';
import { fileURLToPath } from 'url';
import { errWithCause } from 'pino-std-serializers';
import { listRoute } from './routes/list.js';
import dotenv from 'dotenv';
dotenv.config();
import { Console } from 'console';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const fastify = Fastify({
    logger: true
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
})

fastify.register(fastifyView, {
    engine: {
        ejs: ejs
    }
})

fastify.register(listRoute)

fastify.listen({port: 3000}, (err) => {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    });