let items = [
    { id: 1, title: "first task" },
    { id: 2, title: "second task" },
  ];

export const getlistItems = (req: any, reply: any)=>{
    reply.view('/views/index.ejs',{
      listTitle: "Today",
      listItems: items
    })
}