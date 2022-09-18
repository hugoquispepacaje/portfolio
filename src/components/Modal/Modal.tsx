import { useContext, useEffect, useState } from 'react';
import ModalContext from '../../context/Modal/ModalContext';
import Button from '../Button';
import { getModalStyle, modalContainerStyle, modalFooterStyle } from './style';
import ModalProps, { defaultModalProps } from './props';

const Modal = (props:ModalProps) => {
  const { labelShowLess } = props;
  const { visible, contentModal, closeModal } = useContext(ModalContext);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 50);
    } else {
      setIsVisibleAnimation(false);
    }
  }, [visible]);
  return (
    visible ? (
      <div className={getModalStyle(isVisibleAnimation)}>
        <div className={modalContainerStyle}>
          {contentModal}
          <div className={modalFooterStyle}>
            <Button label={labelShowLess} onPress={closeModal} />
          </div>
        </div>
      </div>
    ) : null
  );
};

Modal.defaultProps = defaultModalProps;

export default Modal;
