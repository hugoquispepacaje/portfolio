import SectionCointainer from '../../components/SectionCointainer';
import { ContactItem } from '../../models/data';
import ContactProps, { defaultContactProps } from './props';
import {
  contactConteinterStyle,
  contactItemsContainerStyle,
  getIconStyle,
  subtitleStyle,
} from './style';

const Contact = (props:ContactProps) => {
  const {
    id,
    contactTitle,
    contactSubtitle,
    contactItems,
  } = props;

  const onPress = (item:ContactItem) => {
    if (item.isNewTab) {
      window.open(item.url, '_blank');
    } else {
      window.open(item.url);
    }
  };

  const renderContactItems = contactItems ? contactItems.map(
    (item:ContactItem) => (
      <div key={item.id} onClick={() => onPress(item)} aria-hidden="true">
        <i className={getIconStyle(item.icon)} />
      </div>
    ),
  ) : null;

  return (
    <SectionCointainer
      id={id}
      title={contactTitle}
    >
      <div className={contactConteinterStyle}>
        <h3 className={subtitleStyle}>{contactSubtitle}</h3>
        <div className={contactItemsContainerStyle}>
          { renderContactItems }
        </div>
      </div>
    </SectionCointainer>
  );
};

Contact.defaultProps = defaultContactProps;

export default Contact;
