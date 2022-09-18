import { createContext } from 'react';
import { ModalState } from './props';

export const initialState:ModalState = {
  visible: false,
  contentModal: <div />,
  openModal: (contentModal: JSX.Element) => contentModal || null,
  closeModal: () => null,
};

const ModalContext = createContext(initialState);

export default ModalContext;
