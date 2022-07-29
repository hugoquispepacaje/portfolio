import { useState, useContext, useEffect } from 'react'
import Dock from '../../components/Dock';
import Sidebar from '../../components/Sidebar';
import LanguageContext from '../../context/Language/LanguageContext';
import languageData from '../../data/data';
import { Data } from '../../models/data';
import Banner from '../Banner';
import Hearder from '../Header';
import AppContainerProps, { defaultAppContainerProps } from './props';
import { AppContainerStyle } from './style';

const AppContainer = ( props:AppContainerProps) => {
  props = { ...defaultAppContainerProps, ...props };

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [data, setData] = useState<Data>({
    menu: [],
    banner: {
      name: '',
      degree: '',
      specialty: '',
      imageSrc: '',
    },
    contact: []
  });

  const openSidebar = () => {
    setIsSidebarActive(true);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  const { languageLabel } = useContext(LanguageContext);

  useEffect(()=>{
    const languageDataComplete = languageData.find(item=>item.languageLabel===languageLabel);
    if(languageDataComplete)
      setData(languageDataComplete.data);
  },[languageLabel]);

  return (
    <div className={AppContainerStyle}>
      <Hearder onButtonNavbarPress={openSidebar}/>
      <Banner id="home" data={data.banner}/>
      <div className='h-96 w-full bg-prussian-blue'></div>
      <div className='h-96 w-full bg-red-700'></div>
      <div className='h-96 w-full bg-blue-700'></div>
      <div className='h-96 w-full bg-red-700'></div>
      <div className='h-96 w-full bg-blue-700'></div>
      <div className='h-96 w-full bg-red-700'></div>
      <Sidebar menuItems={data.menu} visible={isSidebarActive} onHide={closeSidebar} />
      <Dock items={data.contact} className='hidden md:flex'/>
    </div>
  )
}

export default AppContainer;