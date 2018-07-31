import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const logTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? 'md-pizza' : 'ios-pizza', 30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-happy' : 'ios-happy', 30),
        Icon.getImageSource(Platform.OS === 'android' ? 'md-cloud' : 'ios-cloud', 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'meowmate.FeedingLogScreen',
                    label: 'Feeding',
                    title: 'Feeding Log',
                    icon: sources[0]
                },
                {
                    screen: 'meowmate.PlaytimeLogScreen',
                    label: 'Playtime',
                    title: 'Playtime Log',
                    icon: sources[1]
                },
                {
                    screen: 'meowmate.PoopingLogScreen',
                    label: 'Pooping',
                    title: 'Pooping Log',
                    icon: sources[2]
                }
            ]
        });
    })
}

export default logTabs;