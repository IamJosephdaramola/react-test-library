import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();

describe("AddInput", () => {
  afterEach(cleanup);

  test("should take a snapshot of the input", () => {
    const { asFragment } = render(<AddInput />);
    expect(asFragment(<AddInput />)).toMatchSnapshot();
  });

  test("should render AddInput element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    expect(inputElement).toBeInTheDocument();
  });

  test("should render be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "Go home by 6pm" } });

    expect(inputElement.value).toBe("Go home by 6pm");
  });

  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "Go home by 6pm" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
