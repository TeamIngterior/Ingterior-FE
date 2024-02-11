import 'styled-components';

interface LayoutComponentProps {
  header_height: number;
  footer_height: number;
}

type ColorProps = Color & {
  [key in keyof Color]: string;
};

type GapProps = {
  [key: string]: string;
};

type Typography = {
  [key: string]: {
    [key: string]: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme {
    layoutComponent: LayoutComponentProps;
    typography: TypoProps;
    gap: GapProps;
    color: ColorProps;
  }
}
