import { useState, useOptimistic, useActionState } from "react";
import { useFormStatus } from "react-dom";
import "./App.css";

const submitComment = async (comment) => {
  // Simulate API call to submit comment
  return new Promise((resolve) => setTimeout(() => resolve(comment), 1000));
};

function CommentForm() {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComments] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  const [error, submitCommentAction, isPending] = useActionState(
    async (previousState, formData) => {
      const comment = formData.get("comment");
      addOptimisticComments(comment);
      const result = await submitComment(comment);
      setComments((comments) => [...comments, result]);
      return null;
    },
    null
  );

  return (
    <div className="comment-form-container">
      {/* action 函数会自动管理表单非受控组件的状态，例如 reset */}
      <form action={submitCommentAction}>
        <textarea name="comment" placeholder="写个评论吧..." />
        <button type="submit" disabled={isPending}>
          发布评论
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <ul className="comments-list">
        {optimisticComments.map((comment, index) => (
          <li key={index}>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return <CommentForm />;
}

export default App;
