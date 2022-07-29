import Button from '../Button';
import Dropdown from '../Dropdown';
import NavbarProps, { defaultNavbarProps } from './props';
import { navbarStyle, logoStyle, leftStyle } from './style';

const Navbar = ( props:NavbarProps ) => {
  props = { ...defaultNavbarProps, ...props };
  return (
    <nav className={navbarStyle}>
      <div>
        <a href={props.href}><img className={logoStyle} src={props.logoSrc} /></a>
      </div>
      <div className={leftStyle}>
        <Dropdown value={props.value} setValue={props.setValue} options={props.options} />
        <Button onPress={props.onButtonPress} hamburguer/>
      </div>
    </nav>
  )
}

export default Navbar;