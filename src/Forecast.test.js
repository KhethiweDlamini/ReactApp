import { render, screen } from "@testing-library/react";
import Forecast from "./Forecast";

test("renders learn react link", () => {
  render(<Forecast />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
