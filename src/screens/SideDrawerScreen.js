import React, { Component } from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SideDrawerScreen extends Component {
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
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
                            size={30}
                            color='#aaa'
                            style={styles.drawerItemIcon}
                        />
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50
    },
    drawerItem: {
        alignItems: 'center',
        backgroundColor: '#eee',
        flexDirection: 'row',
        padding: 10
    },
    drawerItemIcon: {
        marginRight: 10
    }
})