import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

const mockPosts = [
  { id: 1, title: "Test Post", date: "2023-01-01", preview: "Test preview" }
];

test("renders the correct child components", () => {
  const { container } = render(<App posts={mockPosts} />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});