import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /hello world/i, //la i hace que se entienda como una regex que no discrimina mayusculasn ni minusculas
      })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", {
        name: /my title/i,
      })
    ).not.toBeInTheDocument();

    expect(screen.getByRole("list")).toBeInTheDocument();

    expect(screen.getAllByRole("listitem")).not.toHaveLength(3);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
