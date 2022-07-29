const dockStyle = `
  fixed
  h-auto
  top-0
  p-4
  translate-y-full
  z-10
  flex
  flex-col
  justify-center
  items-center
  gap-3
  bg-blue-ncs-opacity-10
  rounded-tr-3xl
  rounded-br-3xl
  border-blue-ncs-opacity-30
  border-t
  border-b
  border-r
  border-solid
  hover:scale-110
  transition-all
  duration-600
`;

const getIconStyle = (iconClass: string) => `
  ${iconClass}
  text-4xl
  text-sky-50
  cursor-pointer
  hover:scale-125
  transition-all
  duration-600
`;

export { dockStyle, getIconStyle };