import {Platform} from 'react-native';

const theme = {
  colors: {
    appBarBackground: '#24292e',
    backgroundApp: '#e1e4e8',
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    bold: '700',
    normal: '400',
  },
};

export default theme;
