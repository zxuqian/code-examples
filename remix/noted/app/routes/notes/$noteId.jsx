import { Form, redirect, useLoaderData } from "remix";
import { getNoteById, removeANote } from "~/data/notes";

export async function loader({ params }) {
  const note = getNoteById(params.noteId);
  return { note };
}

export async function action({ request, params }) {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    removeANote(params.noteId);
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
      </div>
      <Form method="post">
        <input type="hidden" name="_method" value="delete" />
        <button type="submit">删除</button>
      </Form>
    </div>
  );
}
