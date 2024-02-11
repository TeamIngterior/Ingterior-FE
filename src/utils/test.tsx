import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/assets/styles/theme';

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
