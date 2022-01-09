const { PrismaClient } = require("@prisma/client");

const notes = [
  {
    title: "关于 Remix 的用法记录",
    content: "这是一篇关于 Remix 用法的笔记",
  },
  {
    title: "关于 React 的用法记录",
    content: "这是一篇关于 React 用法的笔记",
  },
  {
    title: "关于 Vue 的用法记录",
    content: "这是一篇关于 Vue 用法的笔记",
  },
  {
    title: "关于 JavaScript 的用法记录",
    content: "这是一篇关于 JavaScript 用法的笔记",
  },
  {
    title: "关于 HTML 的用法记录",
    content: "这是一篇关于 HTML 用法的笔记",
  },
];

const db = new PrismaClient();

notes.forEach(async (note) => {
  await db.note.create({
    data: note,
  });
});
