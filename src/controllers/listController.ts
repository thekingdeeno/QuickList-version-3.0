import pool from "../db.js";

const items: object[] = [
    { id: 1, title: "first dummy task" },
    { id: 2, title: "second dummy task" },
  ];



export const getlistItems = async (req: any, reply: any)=>{
  const client = await pool.connect();
  const result = await client.query("SELECT * FROM list")
  client.release();

  await reply.view('/views/index.ejs',{
    listTitle: "Today",
    listItems: items
  });
};