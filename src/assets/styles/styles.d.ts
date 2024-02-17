import 'styled-components';

interface LayoutComponentProps {
  [key: string]: string | number;
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
