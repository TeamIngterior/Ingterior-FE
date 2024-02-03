import 'styled-components';

interface LayoutComponentProps {
  header_height: number;
  footer_height: number;
}

type ColorProps = Color & {
  [key in keyof Color]: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    layoutComponent: LayoutComponentProps;
    color: ColorProps;
  }
}
