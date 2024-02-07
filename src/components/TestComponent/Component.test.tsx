import { render, screen } from '@testing-library/react';
import TestComponent from '.';

test('페이지 렌더링 테스트', async () => {
  render(<TestComponent />);
  const testButton = await screen.findByRole('button');
  expect(testButton.innerHTML).toBe('페이지 렌더링 테스트');
});
