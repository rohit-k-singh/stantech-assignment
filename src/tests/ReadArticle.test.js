// Button.test.js
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { ReadMoreLink } from "../components/ArticleItem";
import { describe, test, expect, jest } from "@jest/globals";
describe("Read more Link component", () => {
  test("renders link with correct text", () => {
    render(<ReadMoreLink id={1} />);
    const linkElement = screen.getByText("Read Article");
    expect(linkElement).toBeInTheDocument();
  });
});
