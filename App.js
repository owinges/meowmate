import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import ProfileScreen from './src/screens/ProfileScreen';
import AddEntryScreen from './src/screens/AddEntryScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register screens
Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen);

// Start app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'meowmate.ProfileScreen',
    title: 'MeowMate'
  }
})