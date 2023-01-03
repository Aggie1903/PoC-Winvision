import { render, screen, fireEvent, waitForElement, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders button submittion', async () => {
  const { getByTestId } = render(<App />);

  for (let i = 1; i <= 1; i++) {
    const textarea = getByTestId(`textarea${i}`);
    const button = getByTestId(`btn${i}`);

    userEvent.type(textarea, 'test');
    userEvent.click(button);

    await waitFor(() => {
      expect(getByTestId(`success-message${i}`)).toBeInTheDocument();
    });
  }
});

