import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import AddEntryScreen from './src/screens/AddEntryScreen';
import EntryFormScreen from './src/screens/EntryFormScreen';
import FeedingLogScreen from './src/screens/FeedingLogScreen';
import PlaytimeLogScreen from './src/screens/PlaytimeLogScreen';
import PoopingLogScreen from './src/screens/PoopingLogScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { store } from './src/store/configureStore';

// Start app with Redux Persist
persistStore(store, null, () => {
  Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
  Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen, store, Provider);
  Navigation.registerComponent('meowmate.EntryFormScreen', () => EntryFormScreen, store, Provider);
  Navigation.registerComponent('meowmate.FeedingLogScreen', () => FeedingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PlaytimeLogScreen', () => PlaytimeLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PoopingLogScreen', () => PoopingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.TestingScreen', () => TestingScreen, store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'meowmate.ProfileScreen',
      title: 'MeowMate'
    }
  })
})