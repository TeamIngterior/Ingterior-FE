import { DefaultTheme } from 'styled-components';

const layoutComponent = {
  header_height: 100,
  footer_height: 100,
};

const color = {
  primary: '#464866',
  primary01: '#EAEAF2',
  primary02: '#CDCFDA',
  primary03: '#ADB1C0',
  primary04: '#8E92A5',
  primary05: '#777A93',
  primary06: '#616483',
  primary07: '#464866',

  secondary: '#FF6347',
  secondary01: '#FBEAE9',
  secondary02: '#FFCDC0',
  secondary03: '#FFAB99',
  secondary04: '#FF8871',
  secondary05: '#FF6347',

  gray01: '#fff',
  gray02: '#f4f4f4',
  gray03: '#ddd',
  gray04: '#9a9a9a',
  gray05: '#5d5d5d',
  gray06: '#1e1e1e',
};

const theme: DefaultTheme = {
  layoutComponent,
  color,
};

export { theme };
