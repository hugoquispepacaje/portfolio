interface ButtonProps {
  onPress?: () => void,
  label?: string,
  hamburguer?: boolean,
  cancel?: boolean,
  icon?: string,
}

const defaultButtonProps:ButtonProps = {
  label: '',
  onPress: () => null,
  cancel: false,
  icon: undefined,
};

export default ButtonProps;
export { defaultButtonProps };
