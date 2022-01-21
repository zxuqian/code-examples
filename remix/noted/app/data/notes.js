let noteList;

if (!global._noteList) {
  global._noteList = [
    {
      id: 1,
      title: "关于 Remix 的用法记录",
      content: "这是一篇关于 Remix 用法的笔记",
    },
    {
      id: 2,
      title: "关于 Vue 的用法记录",
      content: "这是一篇关于 Vue 用法的笔记",
    },
    {
      id: 3,
      title: "关于 JavaScript 的用法记录",
      content: "这是一篇关于 JavaScript 用法的笔记",
    },
    {
      id: 4,
      title: "关于 React 的用法记录",
      content: "这是一篇关于 React 用法的笔记",
    },
    {
      id: 5,
      title: "关于 HTML 的用法记录",
      content: "这是一篇关于 HTML 用法的笔记",
    },
  ];
}

noteList = global._noteList;

export function getAllNotes() {
  return noteList;
}

export function getNoteById(id) {
  noteList = noteList.find((note) => note.id === Number(id));
  return noteList;
}

export function addANewNote(title, content) {
  const newNote = { id: noteList.length + 1, title, content };
  noteList.push(newNote);

  return newNote;
}

export function removeANote(id) {
  noteList.splice(
    noteList.findIndex((note) => note.id === Number(id)),
    1
  );
  return noteList;
}
