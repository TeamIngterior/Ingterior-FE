import * as S from './styles';

export interface ButtonCSSProps {
  size?: 'sm' | 'md' | 'lg'; // 버튼 사이즈, default: md
  $bgType?: 'default' | 'revert';
  $styleType?: 'solid' | 'outline' | 'disabled' | 'warning' | 'text'; // 버튼 디자인 타입, default: solid
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
  size = 'md',
  $styleType = 'solid',
  $bgType = 'default',
  children,
  style,
  icon,
  $fullWidth = false,
  className,
  onClickHandler,
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      size={size}
      className={className}
      $bgType={$bgType}
      $styleType={$styleType}
      $fullWidth={$fullWidth}
      style={{
        ...style,
      }}
      onClick={onClickHandler}
    >
      {icon}
      {children}
    </S.Button>
  );
}

export default Button;
