import { DefaultTheme } from 'styled-components';

const layoutComponent = {
  header_height: 80,
  footer_height: 264,
  header_mobile_height: 56,
  footer_mobile_height: 320,
  main_template_padding: 56,
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

  error: '#a52a2a',
};

const gap = {
  gap1: '8px',
  gap2: '16px',
  gap3: '24px',
  gap4: '32px',
  gap5: '40px',
  gap6: '48px',
  gap7: '56px',
  gap8: '72px',
};

const typography = {
  title: {
    h1: `
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 0em;
      color: ${color.gray06};
    `,
    h2: `
      font-size: 28px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    h3: `
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    h4: `
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    h5: `
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
  },
  body: {
    b1: `
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    b2: `
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
  },
  link: {
    l1: `
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    l2: `
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
  },
  caption: {
    c1: `
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
    c2: `
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
  },
  label: {
    lb1: `
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0em;
      color: ${color.gray06};      
    `,
  },
};

const theme: DefaultTheme = {
  layoutComponent,
  typography,
  gap,
  color,
};

export { theme };
