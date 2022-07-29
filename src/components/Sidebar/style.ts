const sidebarStyle = `
  fixed
  w-full
  h-full
  top-0
  z-50
`;

const getSpaceStyle = ( isVisible:boolean ) => `
  absolute
  h-full
  w-full
  left-0
  ${ isVisible ? 'bg-prussian-blue' : 'bg-transparent'}
  opacity-50
  transition-colors
  duration-500
  cursor-pointer
`;

const getMenuContainerStyle = ( isVisible:boolean ) => `
  absolute
  bg-prussian-blue
  h-full
  lg:w-3/12
  w-1/2
  right-0
  ${ isVisible ? 'translate-x-0' : 'translate-x-full'}
  transition-all
  duration-500
`;

const topMenuStyle = `
  flex
  justify-end
  px-8
  py-6
`;

const menuStyle = `
  py-6
  flex
  flex-col
  gap-2
  text-center
  text-lg
  font-semibold
`;

const itemMenuStyle = `
  cursor-pointer
  hover:text-blue-ncs
  transition-all
  duration-500
`;

export { sidebarStyle, getSpaceStyle, getMenuContainerStyle, topMenuStyle, menuStyle, itemMenuStyle };