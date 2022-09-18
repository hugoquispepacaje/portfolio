import { OPEN_MODAL, CLOSE_MODAL } from '../types';
import { ModalAction, ModalState } from './props';

const ModalReducer = (state: ModalState, action:ModalAction) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        visible: true,
        contentModal: payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        contentModal: payload,
      };
    default:
      return state;
  }
};

export default ModalReducer;
