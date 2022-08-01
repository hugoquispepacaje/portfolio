import Language from '../../models/language';

interface NavbarProps {
  value?: Language;
  setValue: (value:Language) => void;
  options: Language[];
  href: string;
  logoSrc: string;
  logoAlt: string;
  onButtonPress?: () => void;
}

const defaultNavbarProps:NavbarProps = {
  value: {
    id: 0,
    label: '',
    imageSrc: '',
  },
  setValue: () => null,
  options: [],
  href: '#',
  logoSrc: '',
  logoAlt: '',
  onButtonPress: () => null,
};

export default NavbarProps;
export { defaultNavbarProps };
