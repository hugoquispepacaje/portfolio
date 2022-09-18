/* eslint no-console: ["error", { allow: ["error"] }] */
import { useReducer, useMemo } from 'react';
import ModalContext, { initialState } from './ModalContext';
import ModalReducer from './ModalReducer';
import { OPEN_MODAL, CLOSE_MODAL } from '../types';
import { ModalStateProps } from './props';

const ModalState = (props:ModalStateProps) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);
  const { children } = props;

  const openModal = (contentModal: JSX.Element) => {
    try {
      dispatch({ type: OPEN_MODAL, payload: contentModal });
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    try {
      dispatch({ type: CLOSE_MODAL, payload: <div /> });
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    openModal,
    closeModal,
  }), [state.visible]);

  return (
    <ModalContext.Provider
      value={value}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
