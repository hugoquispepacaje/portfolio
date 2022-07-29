const bannerStyle = `
  w-full
  h-[30rem]
  xl:h-[42rem]
  2xl:h-[50rem]
  bg-[url('https://hugoquispe.cl/assets/banner.1de76c1b.jpg')]
  bg-no-repeat
  bg-center
  bg-fixed
  bg-cover
  overflow-hidden
`;

const bannerContainerStyle = `
  w-full
  h-full
  flex
  flex-col
  lg:flex-row
  flex-wrap
  bg-gradient-to-tr from-prussian-blue to-prussian-blue-opacity-50
  justify-around
`;

const titleContainerStyle = `
  h-1/2
  mx-2
  lg:mx-0
  lg:h-full
  flex
  flex-col
  text-center
  justify-center
  gap-6
`;

const getNameStyle = (isStart:boolean) => `
  text-4xl
  sm:text-5xl
  xl:text-6xl
  font-semibold
  ${ isStart ? 'translate-x-0': '-translate-x-full'}
  transition-all
  duration-1000
`;

const getDegreeStyle = (isStart:boolean) => `
  text-xl
  xl:text-3xl
  ${ isStart ? 'translate-x-0': '-translate-x-full'}
  transition-all
  duration-1000
`;
const getSpecialtyStyle = (isStart:boolean) => `
  text-lg
  xl:text-2xl
  ${ isStart ? 'translate-x-0': '-translate-x-full'}
  transition-all
  duration-1000
`;

const imageContainerStyle = `
  h-1/2
  lg:h-full
  flex
  justify-center
`;

const getImageStyle = (isStart:boolean) => `
  mt-auto
  h-full
  lg:h-5/6
  ${ isStart ? 'translate-y-0': 'translate-y-full'}
  transition-all
  duration-1000
`;

export { bannerStyle, bannerContainerStyle, titleContainerStyle, getNameStyle, getDegreeStyle, getSpecialtyStyle, imageContainerStyle, getImageStyle };