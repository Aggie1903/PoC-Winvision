import { render, screen, fireEvent, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders button submittion', () => {
  render(<App />);
  const {getAllByTestId} = render(<App />);
  const textarea = getAllByTestId("textarea1");
  const button = getAllByTestId('btn1');

  userEvent.type(textarea, 'test');
  userEvent.click(button);
  
  successMessage = waitForElement(() => getByTestId('success-message')).then(successMessage => {
    expect(successMessage).toBeInTheDocument();
  });
  });
