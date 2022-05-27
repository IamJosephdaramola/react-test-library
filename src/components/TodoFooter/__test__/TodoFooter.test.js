import { render, screen, cleanup } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  afterEach(cleanup);

  test("should take a snapshot of the TodoFooter", () => {
    const { asFragment } = render(
      <MockTodoFooter numberOfIncompleteTasks={1} />
    );

    expect(
      asFragment(<MockTodoFooter numberOfIncompleteTasks={1} />)
    ).toMatchSnapshot();
  });

  test("should render tasks when the number of incomplete tasks is five", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render tasks when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should link to followers page", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/followers");
  });
});

// test("should render tasks when visible", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();
// });
