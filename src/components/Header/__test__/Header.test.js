import { render, screen, cleanup } from "@testing-library/react";
import Header from "../Header";

afterEach(cleanup);

test("should take a snapshot of the header", () => {
  const { asFragment } = render(<Header title="todo list" />);
  expect(asFragment(<Header />)).toMatchSnapshot();
});

// Get by
test("should render header by test correctly", () => {
  render(<Header title="todo list" />);

  const HeaderElement = screen.getByText(/todo list/i);
  expect(HeaderElement).toBeInTheDocument();
});

/*
test('should render header by role correctly', () => {
	render(<Header title='todo list' />);

	const HeaderElement = screen.getByRole('heading', {
		name: 'todo list',
	});
	expect(HeaderElement).toBeInTheDocument();
});

test('should render header by title correctly', () => {
	render(<Header title='todo list' />);

	const HeaderElement = screen.getByTitle('Header');
	expect(HeaderElement).toBeInTheDocument();
});

test('should render header by id correctly', () => {
	render(<Header title='todo list' />);

	const HeaderElement = screen.getByTestId('header-1');
	expect(HeaderElement).toBeInTheDocument();
});

// Find by
test('should render header by test (find) correctly', async () => {
	render(<Header title='todo list' />);

	const HeaderElement = await screen.findByText(/todo list/i);
	expect(HeaderElement).toBeInTheDocument();
});

// Query by
test('should render header by test (query) correctly', () => {
	render(<Header title='todo list' />);

	const HeaderElement = screen.queryByText(/todo st/i);
	expect(HeaderElement).not.toBeInTheDocument();
});

// Get all by
test('should render header by test (get all) correctly', () => {
	render(<Header title='todo list' />);

	const HeaderElements = screen.getAllByRole('heading');
	expect(HeaderElements.length).toBe(2);
});
*/
