import Fastify, { FastifyListenOptions } from 'fastify';
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
import formbody from '@fastify/formbody';
import ngrok from 'ngrok';

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
fastify.register(formbody)



fastify.register(listRoute)

fastify.listen({port: Number(process.env.PORT)}, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});


// ngrok setup for external link
async function startNgrok (){
  const url = await ngrok.connect({ addr: Number(process.env.PORT), authtoken_from_env: true });
  console.log(`Ingress established at: ${url}`);
};

// startNgrok()