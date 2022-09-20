const contactConteinterStyle = `
  w-full
  flex
  flex-col
  items-center
  justify-center
  flex-wrap
  gap-8
`;

const subtitleStyle = `
  text-center
  font-semibold
  text-base
  md:text-xl
`;

const getIconStyle = (iconClass: string) => `
  ${iconClass}
  text-4xl
  text-sky-50
  cursor-pointer
  hover:scale-125
  transition-all
  duration-200
`;

const contactItemsContainerStyle = `
  w-full
  flex
  flex-col
  md:flex-row
  items-center
  justify-center
  gap-6
`;

export {
  contactConteinterStyle,
  getIconStyle,
  contactItemsContainerStyle,
  subtitleStyle,
};
