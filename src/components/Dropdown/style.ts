const buttonStyle = `
  inline-flex
  gap-2
  items-center
  rounded-lg
  border-2
  border-sky-50
  px-2
  py-2
  hover:border-blue-ncs
  hover:text-blue-ncs
  [&>span]:hover:border-blue-ncs
  transition-colors
  duration-500
`;

const shevronStyle = `
  border-solid
  border-r-2
  border-t-2
  inline-block
  relative
  w-2
  h-2
  border-white
  transition-all
  duration-500
`;

const shevronUpStyle = `
  -rotate-45
  top-0.5
`;
const shervronDownStyle = `
  rotate-[135deg]
  -top-0.5
`;

const flagStyle = `
  w-6
  h-4
  rounded
`;

const dropdownStyle = `
  origin-top-right
  absolute
  right-0
  mt-1
  w-56
  rounded-md
  bg-prussian-blue
  ring-1
  ring-sky-50
  ring-opacity-10
`;

const dropdownContainerStyle = `
  py-1
  flex
  flex-col
  w-full
`;

const buttonDropdownStyle = `
  flex
  justify-center
  gap-2
  px-4
  py-2
  w-full
  hover:bg-blue-ncs
  transition-colors
  duration-500
`;

export {
  buttonStyle,
  shevronStyle,
  shevronUpStyle,
  shervronDownStyle,
  flagStyle,
  dropdownStyle,
  dropdownContainerStyle,
  buttonDropdownStyle,
};