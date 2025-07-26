// src/data/blog.js

const blogName = "Overreacted";
const about = "Personal blog by Dan Abramov. I explain with words and code.";
const image = "https://via.placeholder.com/215";

const posts = [
  {
    id: 1,
    title: "React Hooks in Depth",
    date: "March 10, 2023",
    preview: "Hooks let you use state and other features without writing a class.",
    minutes: 7,
  },
  {
    id: 2,
    title: "A Guide to JSX",
    date: "January 15, 2023",
    preview: "JSX looks like HTML, but it's actually syntax for JavaScript.",
    minutes: 35,
  },
];

export { blogName, about, image, posts };