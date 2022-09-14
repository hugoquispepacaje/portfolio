interface SeccionContainerProps {
  id: string;
  title: string;
  children?: JSX.Element;
  needShowMore?: boolean;
  labelShowMore?: string;
  labelShowLess?: string;
}

const defaultSeccionContainerProps:SeccionContainerProps = {
  id: '',
  title: '',
  needShowMore: false,
  labelShowMore: '',
  labelShowLess: '',
};

export default SeccionContainerProps;
export { defaultSeccionContainerProps };
