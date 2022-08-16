import TitleTextProps, { defaultTitleText } from './props';
import { titleTextStyle, titleTextContainerStyle } from './style';

const TitleText = (props:TitleTextProps) => {
  const { title } = props;
  return (
    <div className={titleTextContainerStyle}>
      <h3 className={titleTextStyle}>{title}</h3>
    </div>
  );
};

TitleText.defaultProps = defaultTitleText;

export default TitleText;
