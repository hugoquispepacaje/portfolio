import { useState, useContext, useEffect } from 'react';
import LanguageContext from '../../context/Language/LanguageContext';
import languageData from '../../data/data';
import { Data } from '../../models/data';
import { defaultAppData } from './props';

const useAppContainer = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [data, setData] = useState<Data>(defaultAppData);

  const openSidebar = () => {
    setIsSidebarActive(true);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  const { languageLabel } = useContext(LanguageContext);

  useEffect(() => {
    const languageDataComplete = languageData.find((item) => item.languageLabel === languageLabel);
    if (languageDataComplete) {
      setData(languageDataComplete.data);
    }
  }, [languageLabel]);
  return {
    isSidebarActive,
    data,
    openSidebar,
    closeSidebar,
  };
};

export default useAppContainer;
