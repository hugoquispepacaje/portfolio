import FooterProps from './props';
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

export default Footer;
