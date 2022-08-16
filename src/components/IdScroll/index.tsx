import IdScrollProps, { defaultIdScrollProps } from './props';
import idScrollStyle from './style';

const IdScroll = (props:IdScrollProps) => {
  const { id } = { ...defaultIdScrollProps, ...props };
  return (
    <div id={id} className={idScrollStyle} />
  );
};

export default IdScroll;
