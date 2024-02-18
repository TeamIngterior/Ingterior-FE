import * as S from './styles';

export interface ButtonCSSProps {
  size?: 'sm' | 'md' | 'lg' | 'initial'; // 버튼 사이즈, default: md
  $styleType?:
    | 'solid'
    | 'outline'
    | 'disabled'
    | 'warning'
    | 'text'
    | 'revert'
    | 'initial'; // 버튼 디자인 타입, default: solid
  $fullWidth?: boolean; // 버튼 가로 너비 100%, default: false
}

interface ButtonProps extends ButtonCSSProps {
  type?: 'button' | 'submit' | 'reset'; // 버튼 타입, default: submit
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClickHandler?: (
    e?: React.MouseEvent<HTMLButtonElement>,
    ...args: any[]
  ) => void;
}

function Button({
  type = 'submit',
  size = 'lg',
  $styleType = 'solid',
  children,
  style,
  icon,
  $fullWidth = false,
  className,
  onClickHandler,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      size={size}
      className={className}
      $styleType={$styleType}
      $fullWidth={$fullWidth}
      style={{
        ...style,
      }}
      onClick={onClickHandler}
      {...props}
    >
      {icon}
      {children}
    </S.Button>
  );
}

export default Button;
