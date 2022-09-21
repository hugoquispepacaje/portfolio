import LanguageData from '../models/data';
import dataEN from './dataEN';
import dataES from './dataES';
import dataFR from './dataFR';

const languageData:LanguageData[] = [
  {
    languageLabel: 'ES',
    data: dataES,
  },
  {
    languageLabel: 'EN',
    data: dataEN,
  },
  {
    languageLabel: 'FR',
    data: dataFR,
  },
];

export default languageData;
