const getModalStyle = (isVisible:boolean) => `
  fixed
  w-full
  h-full
  top-0
  z-50
  duration-500
  ${isVisible ? 'bg-prussian-blue-opacity-50' : 'bg-transparent'}
  flex
  justify-center
  items-center
`;

const modalContainerStyle = `
  bg-prussian-blue
  rounded-xl
  border-blue-ncs-opacity-30
  border
  border-solid
  p-6
  w-[300px]
  lg:w-[400px]
`;

const modalFooterStyle = `
  flex
  justify-center
  pt-4
`;

export { getModalStyle, modalContainerStyle, modalFooterStyle };
