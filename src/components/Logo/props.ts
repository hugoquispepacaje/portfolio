interface LogoProps {
  logoSrc: string;
  logoAlt: string;
  title?: string;
}

const defaultLogoProps:LogoProps = {
  logoSrc: '',
  logoAlt: '',
  title: '',
};

export default LogoProps;
export { defaultLogoProps };
