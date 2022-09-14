import { useState } from 'react';
import IdScroll from '../IdScroll';
import SeccionContainerProps, { defaultSeccionContainerProps } from './props';
import {
  containerButtonViewMore,
  containerViewMoreActiveStyle,
  containerViewMoreStyle,
  seccionContainerStyle,
  titleStyle,
} from './style';
import Button from '../Button';

const SectionCointainer = (props:SeccionContainerProps) => {
  const {
    id,
    title,
    children,
    needShowMore,
    labelShowMore,
    labelShowLess,
  } = props;
  const [isViewMoreActive, setIsViewMoreActive] = useState(false);
  const renderViewMore = (childrenVM:any) => (
    <>
      <div className={containerViewMoreStyle.concat(isViewMoreActive ? '' : containerViewMoreActiveStyle)}>
        {childrenVM}
      </div>
      <div className={containerButtonViewMore}>
        <Button
          label={isViewMoreActive ? labelShowLess : labelShowMore}
          onPress={() => setIsViewMoreActive(!isViewMoreActive)}
        />
      </div>
    </>
  );
  return (
    <section className={seccionContainerStyle}>
      <IdScroll id={id} />
      <h2 className={titleStyle}>{title}</h2>
      { needShowMore ? renderViewMore(children) : children}
    </section>
  );
};

SectionCointainer.defaultProps = defaultSeccionContainerProps;

export default SectionCointainer;
