import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // "learn react" というテキストを探す代わりに、存在しないテキストを探させてテストを失敗させる
  const linkElement = screen.getByText(/hogehoge/i); // この行を変更
  expect(linkElement).toBeInTheDocument();
});

