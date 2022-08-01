import ButtonProps, { defaultButtonProps } from './props';
import {
  buttonStyle,
  buttonHamburgerStyle,
  spanHamburgerStyle,
  buttonCancelStyle,
  spanCancelStyle,
} from './style';

const Button = (props:ButtonProps) => {
  const {
    cancel,
    hamburguer,
    label,
    onPress,

  } = { ...defaultButtonProps, ...props };
  if (cancel) {
    return (
      <button type="button" className={buttonCancelStyle} onClick={onPress}>
        <span className={spanCancelStyle.concat('rotate-45 top-1.5')} />
        <span className={spanCancelStyle.concat('-rotate-45 -top-0.5')} />
      </button>
    );
  }

  if (hamburguer) {
    return (
      <button type="button" className={buttonHamburgerStyle} onClick={onPress}>
        <span className={spanHamburgerStyle} />
        <span className={spanHamburgerStyle} />
        <span className={spanHamburgerStyle} />
      </button>
    );
  }

  return (
    <button type="button" className={buttonStyle} onClick={onPress}>
      {label}
    </button>
  );
};

export default Button;
