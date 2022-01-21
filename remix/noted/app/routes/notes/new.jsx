import { Form, redirect, json, useActionData } from "remix";
import { addANewNote } from "~/data/notes";

function validateTitle(title) {
  if (!title || title.length < 1) {
    return "标题不能为空";
  }
  if (title.length < 2) {
    return "标题至少需要2个字";
  }
}

function validateContent(content) {
  if (!content || content.length < 1) {
    return "内容不能为空";
  }
}

export async function action({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const content = form.get("content");

  const fieldErrors = {
    title: validateTitle(title),
    content: validateContent(content),
  };

  const fields = { title, content };

  if (Object.values(fieldErrors).some(Boolean)) {
    return json({ fieldErrors, fields }, { status: 400 });
  }

  const note = addANewNote(title, content);

  return redirect(`/notes/${note.id}`);
}

export default function NewNoteRoute() {
  const actionData = useActionData();
  return (
    <Form method="post">
      <h2>添加笔记</h2>
      <label>
        标题：
        <input
          type="text"
          name="title"
          defaultValue={actionData?.fields.title}
        />
        {actionData?.fieldErrors?.title && (
          <p className="field-error">{actionData?.fieldErrors?.title}</p>
        )}
      </label>
      <label>
        笔记：
        <textarea
          name="content"
          cols="30"
          rows="10"
          defaultValue={actionData?.fields.content}
        ></textarea>
        {actionData?.fieldErrors?.content && (
          <p className="field-error">{actionData?.fieldErrors?.content}</p>
        )}
      </label>

      <button type="submit">保存</button>
    </Form>
  );
}
