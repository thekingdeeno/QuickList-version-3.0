import { deleteListItem, editListItem, getlistItems, postListItem } from "../controllers/listController.js";

// list scheme 
const list = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        title: {type: 'string'}
    }
}
  
// options for get all items
const getlistItemsOpts = {
    schema: {
        200:{
            type: 'array',
            items: list,
        }
    },
    handler: getlistItems
};
// options for post list item
const postListItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['newItem'],
            properties: {
                newItem: {type: 'string'}
            }
        }
    },
    handler: postListItem
}
// options for edit list item
const editListItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['updatedItemId', 'updatedItemTitle'],
            properties: {
                updatedItemId: {type: 'string'},
                updatedItemTitle: {type: 'string'}
            }
        }
    },
    handler: editListItem
};

const deleteListItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['deleteItemId'],
            properties: {
                deletedItemId: {type: 'string'}
            }
        }
    },
    handler: deleteListItem
}

export const listRoute = function(fastify: any, options: any, done: any) {
    // Get all items
    fastify.get('/', getlistItemsOpts);
    fastify.post('/add', postListItemOpts);
    fastify.post('/edit', editListItemOpts);
    fastify.post('/delete', deleteListItemOpts);
    done()
}