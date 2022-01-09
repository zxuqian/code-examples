import { Link, Outlet, useLoaderData } from "remix";
import notesStyle from "~/styles/notes.css";
import { db } from "~/utils/db.server";

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
    noteList: await db.note.findMany(),
    take: 5,
    orderBy: { createdAt: "desc" },
  };

  return data;
}

export default function Index() {
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
                {/* <p>{note.content}</p> */}
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
