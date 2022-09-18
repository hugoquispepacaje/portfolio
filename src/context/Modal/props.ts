interface ModalState {
  visible: boolean;
  contentModal: JSX.Element;
  openModal: (contentModal: JSX.Element) => void;
  closeModal: () => void;
}

interface ModalAction {
  type: string;
  payload: JSX.Element;
}

interface ModalStateProps {
  children: JSX.Element;
}

export {
  type ModalState,
  type ModalAction,
  type ModalStateProps,
};
