import { Link, Outlet, useLoaderData } from "remix";
import notesStyle from "~/styles/notes.css";
import { getAllNotes } from "~/data/notes.js";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: notesStyle,
    },
  ];
}

export async function loader() {
  const data = {
    noteList: getAllNotes(),
  };
  return data;
}

export default function NoteIndex() {
  const data = useLoaderData();

  return (
    <div className="notes-layout">
      <aside>
        <div className="logo">NOTED</div>
        <Link to="new" className="link-button">
          添加一条笔记
        </Link>
        <ul className="notes-list">
          {data.noteList.map((note) => {
            return (
              <li key={note.id}>
                <Link to={`${note.id}`}>{note.title}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="notes-outlet">
        <Outlet />
      </main>
    </div>
  );
}
