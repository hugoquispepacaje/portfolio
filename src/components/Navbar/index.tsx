import Button from '../Button';
import Dropdown from '../Dropdown';
import Logo from '../Logo';
import NavbarProps, { defaultNavbarProps } from './props';
import { navbarStyle, leftStyle } from './style';

const Navbar = (props:NavbarProps) => {
  const {
    href,
    logoSrc,
    value,
    onButtonPress,
    options,
    setValue,
    logoAlt,
  } = { ...defaultNavbarProps, ...props };
  return (
    <nav className={navbarStyle}>
      <div>
        <a href={href}>
          <Logo logoSrc={logoSrc} logoAlt={logoAlt} />
        </a>
      </div>
      <div className={leftStyle}>
        <Dropdown value={value} setValue={setValue} options={options} />
        <Button onPress={onButtonPress} hamburguer />
      </div>
    </nav>
  );
};

export default Navbar;
