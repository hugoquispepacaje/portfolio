import CardProps, { defaultCardProps } from './props';
import cardStyle from './style';

const Card = (props: CardProps) => {
  const { children } = props;
  return (
    <div className={cardStyle}>
      {children}
    </div>
  );
};

Card.defaultProps = defaultCardProps;

export default Card;
