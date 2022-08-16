interface SeccionContainerProps {
  id: string;
  title: string;
  children?: JSX.Element;
  needViewMore?: boolean;
  labelViewMore?: string;
}

const defaultSeccionContainerProps:SeccionContainerProps = {
  id: '',
  title: '',
  needViewMore: false,
  labelViewMore: '',
};

export default SeccionContainerProps;
export { defaultSeccionContainerProps };
