import React, { Component } from 'react';
import {
    Dimensions,
    Platform,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../styles/sideDrawerStyles';

export default class SideDrawerScreen extends Component {

    displayCalendar = () => {
        this.props.navigator.handleDeepLink({
            link: 'Calendar'
        });
    }

    displayCatDetails = () => {
        this.props.navigator.handleDeepLink({
            link: 'CatDetails'
        });
    }

    displayEntryLog = () => {
        this.props.navigator.handleDeepLink({
            link: 'EntryLog'
        });
    }

    render() {
        return (
            <View
                style={[styles.container,
                    // Set width for Android here; iOS is handled in App.js
                    { width: Platform.OS === 'android'
                        ? Dimensions.get('window').width * 0.9
                        : Dimensions.get('window').width
                    }
                ]}>
                <TouchableOpacity onPress={this.displayCatDetails}>
                    <View style={styles.drawerItem}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
                            size={30}
                            color='black'
                            style={styles.drawerItemIcon}
                        />
                        <Text>Cat Info</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayCalendar}>
                    <View style={styles.drawerItem}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
                            size={30}
                            color='black'
                            style={styles.drawerItemIcon}
                        />
                        <Text>Calendar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayEntryLog}>
                    <View style={styles.drawerItem}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                            size={30}
                            color='black'
                            style={styles.drawerItemIcon}
                        />
                        <Text>Entry Log</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
