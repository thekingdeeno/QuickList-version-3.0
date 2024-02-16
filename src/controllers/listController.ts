import pool from "../db.js";

// generate all items
export const getlistItems = async (req: any, reply: any)=>{
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM list")
  const items: object[] = result.rows;
  await reply.view('/views/index.ejs',{
    listTitle: "Today",
    listItems: items
  });
  client.release();
};

// add list item
export const postListItem = async (req: any, reply: any)=>{
  const newItem = req.body.newItem;
  const client = await pool.connect();
  await client.query(`INSERT INTO list (title) VALUES ('${newItem}')`)
  await reply.redirect('/')
  client.release();
};

// edit list item
export const editListItem = async (req: any, reply: any)=>{
  const updatedId = req.body.updatedItemId
  const updatedTitle = req.body.updatedItemTitle;
  const client = await pool.connect();
  await client.query(`UPDATE list SET title = '${updatedTitle}' WHERE id = ${updatedId}`);
  await reply.redirect('/');
  client.release();
};

// delete List Item
export const deleteListItem = async (req:any, reply:any)=>{
  const deleteItemId = req.body.deleteItemId
  const client = await pool.connect();
  await client.query(`DELETE FROM list WHERE id = ${deleteItemId}`);
  await reply.redirect('/');
};