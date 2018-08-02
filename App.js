import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import AddEntryScreen from './src/screens/AddEntryScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import CatDetailsScreen from './src/screens/CatDetailsScreen';
import EntryFormScreen from './src/screens/EntryFormScreen';
import FeedingLogScreen from './src/screens/FeedingLogScreen';
import PlaytimeLogScreen from './src/screens/PlaytimeLogScreen';
import PoopingLogScreen from './src/screens/PoopingLogScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SideDrawerScreen from './src/screens/SideDrawerScreen';

import displayProfileScreen from './src/screens/displayProfileScreen';
import { store } from './src/store/configureStore';

// Start app with Redux Persist
persistStore(store, null, () => {
  Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
  Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen, store, Provider);
  Navigation.registerComponent('meowmate.CalendarScreen', () => CalendarScreen, store, Provider);
  Navigation.registerComponent('meowmate.CatDetailsScreen', () => CatDetailsScreen, store, Provider);
  Navigation.registerComponent('meowmate.EntryFormScreen', () => EntryFormScreen, store, Provider);
  Navigation.registerComponent('meowmate.FeedingLogScreen', () => FeedingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PlaytimeLogScreen', () => PlaytimeLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PoopingLogScreen', () => PoopingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.SideDrawerScreen', () => SideDrawerScreen, store, Provider);

  displayProfileScreen();
})

  // .purge().then(event => console.log(event));