import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import moment from 'moment';

import displayProfileScreen from './displayProfileScreen';
import { deleteFeeding } from '../store/entryActions';
import styles from '../styles/entryLogScreenStyles';
import theme from '../styles/theme';

class FeedingLogScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: theme.tertiary
    };

    static navigatorButtons = {
        leftButtons: [
            {
                title: 'Back',
                id: 'cancel'
            }
        ]
    };

    constructor(props) {
        super(props);
        
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            displayProfileScreen();
        }
    }

    render() {
        // Sort entries by month in descending order
        const entries = this.props.entries.sort((a, b) => moment(b.date) - moment(a.date));

        // Function for sorting entries by time in descending order
        const sorted = array => array.sort((a, b) => moment(a.time) - moment(b.time));

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={entries}
                    keyExtractor={item => moment(item.date).format()}
                    renderItem={({ item }) => (
                        <View style={styles.entry}>
                            <View style={styles.date}>
                                <Text style={styles.dateText}>
                                    {moment(item.date).format('DD/MM/YYYY - dddd')}
                                </Text>
                            </View>
                            <FlatList
                                keyExtractor={item => moment(item.time).format()}
                                data={sorted(item.data)}
                                renderItem={({ item }) => (
                                    <View style={styles.nestedItem}>
                                        <View style={styles.item}>
                                            <View>
                                                <Text>{moment(item.time).format('hh:mm A')}</Text>
                                                <Text style={styles.itemText}>{item.foodType}</Text>
                                                <Text style={styles.itemText}>{item.quantity} g</Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{ alignSelf: 'center' }}
                                                onPress={() => this.props.onDeleteFeeding(moment(item.time).format(), item.quantity)}
                                            >
                                                <Icon name='ios-trash' color='red' size={30} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            />
                            <Text style={styles.totalText}>Total: {item.feedingTarget.fulfilled} / {item.feedingTarget.target} g</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        entries: state.feeding.entries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteFeeding: (time, quantity) => dispatch(deleteFeeding(time, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedingLogScreen);