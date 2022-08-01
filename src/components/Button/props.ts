interface ButtonProps {
  onPress?: () => void,
  label?: string,
  hamburguer?: boolean,
  cancel?: boolean,
}

const defaultButtonProps:ButtonProps = {
  label: '',
  onPress: () => null,
  cancel: false,
};

export default ButtonProps;
export { defaultButtonProps };
