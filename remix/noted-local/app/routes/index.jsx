import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <Link to="notes">查看笔记</Link>
    </div>
  );
}
