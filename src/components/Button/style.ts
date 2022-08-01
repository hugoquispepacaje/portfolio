const buttonStyle = `
  rounded-lg
  border-2
  border-sky-50
  px-2
  py-2
  hover:border-blue-ncs
  hover:text-blue-ncs
  transition-colors
  duration-500
`;

const buttonHamburgerStyle = `
  [&>span]:hover:bg-blue-ncs
`;

const spanHamburgerStyle = `
  block
  w-8
  h-1
  mb-1
  relative
  bg-sky-50
  rounded-lg
  transition-colors
  duration-500
`;

const buttonCancelStyle = `
  rounded-full
  border-2
  border-sky-50
  px-2
  py-2
  hover:border-blue-ncs
  transition-colors
  duration-500
  [&>span]:hover:bg-blue-ncs
`;

const spanCancelStyle = `
  block
  w-4
  h-1
  mb-1
  relative
  bg-sky-50
  rounded-lg
  transition-colors
  duration-500
`;

export {
  buttonStyle,
  buttonHamburgerStyle,
  spanHamburgerStyle,
  buttonCancelStyle,
  spanCancelStyle,
};
