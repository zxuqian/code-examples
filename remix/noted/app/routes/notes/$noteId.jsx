import { Form, Link, redirect, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export async function loader({ params }) {
  const note = await db.note.findUnique({
    where: { id: params.noteId },
  });

  // for more date in the future, put note in a data wraping object

  return { note };
}

export async function action({ request, params }) {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    await db.note.delete({ where: { id: params.noteId } });
    return redirect("/notes");
  }
  return null;
}

export default function NoteRoute() {
  const { note } = useLoaderData();

  return (
    <div>
      <h1>{note.title}</h1>
      <div>
        <p>{note.content}</p>
        <Form method="post">
          <input type="hidden" name="_method" value="delete" />
          <button type="submit">删除</button>
        </Form>
        {/* <Link to="edit">编辑</Link> */}
        {/* or edit in this page? */}
      </div>
    </div>
  );
}
