import { getlistItems } from "../controllers/listController.js";

// list scheme 
const list = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'}
    }
}
  
// options for get all items
const getlistItemsOpt = {
    schema: {
        200:{
            type: 'array',
            items: "list",
        }
    },
    handler: getlistItems
}

export const listRoute = function(fastify: any, options: any, done: any) {
    // Get all items
    fastify.get('/', getlistItemsOpt);

    done()
}