import { render, screen, fireEvent, waitForElement, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('tests to see if all questions are there and if the submitton works', async () => {
  const { getByTestId } = render(<App />);

  for (let i = 1; i <= 15; i++) {
    const textarea = getByTestId(`textarea${i}`);
    const button = getByTestId(`btn${i}`);

    userEvent.type(textarea, 'test');
    userEvent.click(button);

    await waitFor(() => {
      expect(getByTestId(`success-message${i}`)).toBeInTheDocument();
    });
  }
});

test('tests to see if all questions have titles', async () => {
  const { getByTestId } = render(<App />);

  for (let x = 1; x <= 20; x++) {
    const title = getByTestId(`title${x}`);

    expect(title).toBeInTheDocument();
  }
});

