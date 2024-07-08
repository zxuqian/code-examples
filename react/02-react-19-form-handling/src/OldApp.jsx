import { useState, useOptimistic, useActionState } from "react";
import { useFormStatus } from "react-dom";
import "./App.css";

const submitComment = async (comment) => {
  // Simulate API call to submit comment
  return new Promise((resolve) => setTimeout(() => resolve(comment), 1000));
};

function CommentForm() {
  const [comments, setComments] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const comment = formData.get("comment");
    try {
      const result = await submitComment(comment);
      setComments((comments) => [...comments, result]);
      setIsPending(false);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleFormSubmit}>
        <textarea
          name="comment"
          placeholder="写个评论吧..."
          cols={40}
          rows={4}
        />
        {/* <button type="submit" disabled={isPending}>
          发布评论
        </button> */}
        <SubmitButton />
      </form>
      {error && <p className="error">{error}</p>}
      <ul className="comments-list">
        {comments.map((comment, index) => (
          <li key={index}>
            <p>评论：{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      发布评论
    </button>
  );
}

function OldApp() {
  return (
    <div className="container">
      <CommentForm />
    </div>
  );
}

export default OldApp;
