import { Link } from "remix";
import indexStyle from "~/styles/index.css";

export function links() {
  return {
    rel: "stylesheet",
    href: indexStyle,
  };
}

export default function Index() {
  return (
    <div className="homePage">
      <Link to="notes">查看笔记</Link>
    </div>
  );
}
