import FooterProps, { defaultFooterProps } from './props';
import footerStyle from './style';

const Footer = (props:FooterProps) => {
  const { leftSide, rightSide } = props;
  return (
    <footer className={footerStyle}>
      <p>{leftSide}</p>
      <p>{rightSide}</p>
    </footer>
  );
};

Footer.defaultProps = defaultFooterProps;

export default Footer;
