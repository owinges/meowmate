import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AddEntryScreen from './src/screens/AddEntryScreen';
import EntryFormScreen from './src/screens/EntryFormScreen';
import FeedingLogScreen from './src/screens/FeedingLogScreen';
import PlaytimeLogScreen from './src/screens/PlaytimeLogScreen';
import PoopingLogScreen from './src/screens/PoopingLogScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// TESTING SCREEN
import TestingScreen from './src/screens/TestingScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register screens
Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen, store, Provider);
Navigation.registerComponent('meowmate.EntryFormScreen', () => EntryFormScreen, store, Provider);
Navigation.registerComponent('meowmate.FeedingLogScreen', () => FeedingLogScreen, store, Provider);
Navigation.registerComponent('meowmate.PlaytimeLogScreen', () => PlaytimeLogScreen, store, Provider);
Navigation.registerComponent('meowmate.PoopingLogScreen', () => PoopingLogScreen, store, Provider);
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