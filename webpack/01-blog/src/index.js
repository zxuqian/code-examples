import { getBlogPosts } from "./data";
import "./style.css";
import HeroImage from "./assets/images/hero.jpeg";
import "./test/date/printDate";

const blogs = getBlogPosts();
const ul = document.createElement("ul");
blogs.forEach((blog) => {
  const li = document.createElement("li");
  li.innerText = blog;
  ul.appendChild(li);
});
document.body.appendChild(ul);

const image = document.createElement("img");
image.src = HeroImage;
document.body.prepend(image);

const h1 = document.createElement("h1");
h1.innerText = "博客列表";
document.body.prepend(h1);
