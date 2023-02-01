import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("renders the number of completed todos (90 at initial load) in the heading", async () => {
  render(<App />);

  // Wait for the todos to load
  await screen.findAllByRole("checkbox");

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("90 / 200 Completed");
});

it("renders the number of completed todos (91 after one todo is checked) in the heading", async () => {
  //  Arrange
  const user = userEvent.setup();
  render(<App />);

  //  Act
  const heading = screen.getByRole("heading");
  //  I have to wait for all of the checkboxes to load up
  const checkboxes = await screen.findAllByRole("checkbox");
  //  I create an array with the only the unchecked boxes
  const unCheckedBoxes = checkboxes.filter((item) => !item.checked);
  //  To reproduce a user checking a random task. I generate a random number between 0 and the amount of unchecked boxes. Then I use that random number to create a variable that will have an item from the 'unCheckedBoxes'.
  const randomNumber = Math.floor(Math.random() * (unCheckedBoxes.length + 1));
  const randomUnCheckedBox = unCheckedBoxes[randomNumber];

  await user.click(randomUnCheckedBox);
  // Assert
  expect(heading).toHaveTextContent("91 / 200 Completed");
});
