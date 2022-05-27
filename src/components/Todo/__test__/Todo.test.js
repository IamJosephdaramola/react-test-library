import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  afterEach(cleanup);

  test("should take a snapshot of the Todo", () => {
    const { asFragment } = render(<MockedTodo />);

    expect(asFragment(<MockedTodo />)).toMatchSnapshot();
  });

  test("should render the same text passed into title prop", () => {
    render(<MockedTodo />);

    addTasks(["Relocate to the UK"]);
    const outputElement = screen.getByText(/Relocate to the UK/i);

    expect(outputElement).toBeInTheDocument();
  });

  test("should render multiple items in the todo list", () => {
    render(<MockedTodo />);

    const tasks = ["Relocate to UK", "Wash plates", "clothes", "makes"];

    addTasks(tasks);
    const outputElement = screen.getAllByTestId("todo");

    expect(outputElement.length).toBe(tasks.length);
  });

  test("task should not have the completed task when initially rendered", () => {
    render(<MockedTodo />);

    addTasks(["Go shopping"]);

    const divElement = screen.getByTestId("todo");

    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should  have the completed task when clicked", () => {
    render(<MockedTodo />);

    addTasks(["Go shopping"]);

    const divElement = screen.getByTestId("todo");

    fireEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });
});
