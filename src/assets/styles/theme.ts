import { DefaultTheme } from 'styled-components';

const layoutComponent = {
  header_height: 100,
  footer_height: 100,
};

const color = {
  primary: '#464866',
  primary100: '#EAEAF1',
  primary200: '#C9CCD7',
  primary300: '#A7ABBB',
  primary400: '#868A9F',
  primary500: '#6D718B',
  primary600: '#56597A',
  secondary: '#ff6347',
  secondary100: '#FBE8E7',
  secondary200: '#FFC9BC',
  secondary300: '#FFA592',
  secondary400: '#FF8067',
};

const theme: DefaultTheme = {
  layoutComponent,
  color,
};

export { theme };
