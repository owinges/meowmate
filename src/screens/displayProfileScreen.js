import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const displayProfileScreen = () => Promise.all([
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

export default displayProfileScreen;