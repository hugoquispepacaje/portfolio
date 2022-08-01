interface HeaderProps {
  onButtonNavbarPress?: () => void;
}

const defaultHeaderProps:HeaderProps = {
  onButtonNavbarPress: () => null,
};

export default HeaderProps;
export { defaultHeaderProps };
