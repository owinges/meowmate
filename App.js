import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AddEntryScreen from './src/screens/AddEntryScreen';
import EntryFormScreen from './src/screens/EntryFormScreen';
import EntryLogScreen from './src/screens/EntryLogScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// TESTING SCREEN
import TestingScreen from './src/screens/TestingScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register screens
Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen, store, Provider);
Navigation.registerComponent('meowmate.EntryFormScreen', () => EntryFormScreen, store, Provider);
Navigation.registerComponent('meowmate.EntryLogScreen', () => EntryLogScreen, store, Provider);
Navigation.registerComponent('meowmate.TestingScreen', () => TestingScreen, store, Provider);

// Start app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'meowmate.ProfileScreen',
    title: 'MeowMate'
  }
})

// Start app with testing screen
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'meowmate.TestingScreen',
//     title: 'Testing'
//   }
// })