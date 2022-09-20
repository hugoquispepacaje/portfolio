interface LogoProps {
  logoSrc: string;
  logoAlt: string;
  title?: string;
  sizeStyle?: string;
}

const defaultLogoProps:LogoProps = {
  logoSrc: '',
  logoAlt: '',
  title: '',
  sizeStyle: '',
};

export default LogoProps;
export { defaultLogoProps };
