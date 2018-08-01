import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Icon from 'react-native-vector-icons/Ionicons';

import AddEntryScreen from './src/screens/AddEntryScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import EntryFormScreen from './src/screens/EntryFormScreen';
import FeedingLogScreen from './src/screens/FeedingLogScreen';
import PlaytimeLogScreen from './src/screens/PlaytimeLogScreen';
import PoopingLogScreen from './src/screens/PoopingLogScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SideDrawerScreen from './src/screens/SideDrawerScreen';

import { store } from './src/store/configureStore';

// Start app with Redux Persist
persistStore(store, null, () => {
  Navigation.registerComponent('meowmate.ProfileScreen', () => ProfileScreen, store, Provider);
  Navigation.registerComponent('meowmate.AddEntryScreen', () => AddEntryScreen, store, Provider);
  Navigation.registerComponent('meowmate.CalendarScreen', () => CalendarScreen, store, Provider);
  Navigation.registerComponent('meowmate.EntryFormScreen', () => EntryFormScreen, store, Provider);
  Navigation.registerComponent('meowmate.FeedingLogScreen', () => FeedingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PlaytimeLogScreen', () => PlaytimeLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.PoopingLogScreen', () => PoopingLogScreen, store, Provider);
  Navigation.registerComponent('meowmate.SideDrawerScreen', () => SideDrawerScreen, store, Provider);

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'meowmate.ProfileScreen',
        title: 'MeowMate',
        navigatorButtons: {
          rightButtons: [
            {
              icon: sources[0],
              title: 'Menu',
              id: 'sideDrawerToggle'
            }
          ]
        }
      },
      drawer: {
        right: {
          screen: 'meowmate.SideDrawerScreen'
        },
        style: {
          rightDrawerWidth: 90
        },
        type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: 'slide-and-scale', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
      }
    })
  })
})
  // .purge().then(event => console.log(event));