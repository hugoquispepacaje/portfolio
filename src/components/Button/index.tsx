import ButtonProps, { defaultButtonProps } from './props';
import { buttonStyle, buttonHamburgerStyle,spanHamburgerStyle, buttonCancelStyle, spanCancelStyle } from './style';

const Button = ( props:ButtonProps ) => {
  props = { ...defaultButtonProps, ...props };

  if(props.cancel){
    return (
      <button type='button' className={buttonCancelStyle} onClick={props.onPress}>
        <span className={spanCancelStyle.concat('rotate-45 top-1.5')}></span>
        <span className={spanCancelStyle.concat('-rotate-45 -top-0.5')}></span>
      </button>
    )
  }
  
  if(props.hamburguer){
    return (
      <button type='button' className={buttonHamburgerStyle} onClick={props.onPress}>
        <span className={spanHamburgerStyle}></span>
        <span className={spanHamburgerStyle}></span>
        <span className={spanHamburgerStyle}></span>
      </button>
    )
  }

  return (
    <button type='button' className={buttonStyle} onClick={props.onPress}>
      {props.label}
    </button>
  )
}

export default Button;