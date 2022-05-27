import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockedFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  afterEach(cleanup);

  test("should take a snapshot of the FollowersList", () => {
    const { asFragment } = render(<MockedFollowersList />);

    expect(asFragment(<MockedFollowersList />)).toMatchSnapshot();
  });

  test("should render a follower", async () => {
    render(<MockedFollowersList />);

    const divElement = await screen.findByTestId("follower-item-0");
    expect(divElement).toBeInTheDocument();
  });

  //   test("should render multiple  followers", async () => {
  //     render(<MockedFollowersList />);

  //     const followersElement = await screen.findAllByTestId(/follower-item/i);

  //     expect(followersElement.length).toBe(5);
  //   });
});
