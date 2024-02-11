import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface Props {
  children: React.ReactNode;
}

function StyledThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default StyledThemeProvider;
