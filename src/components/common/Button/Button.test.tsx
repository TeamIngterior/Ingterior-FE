import { fireEvent } from '@testing-library/react';
import { render } from '@/utils/test';
import Button from '.';

describe('Button 컴포넌트', () => {
  it('버튼 클릭 시 onClickHandler 함수 호출', () => {
    const onClickHandler = jest.fn();
    const buttonText = 'Click me';

    const { getByText } = render(
      <Button onClickHandler={onClickHandler}>{buttonText}</Button>
    );

    const button = getByText(buttonText);
    fireEvent.click(button);

    expect(onClickHandler).toHaveBeenCalled();
  });
});
