import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import moment from 'moment';

import displayProfileScreen from './displayProfileScreen';
import { deletePlaytime } from '../store/entryActions';

class PlaytimeLogScreen extends Component {
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
        const entries = this.props.entries.sort((a, b) => a.date < b.date);

        // Function for sorting entries by time in descending order
        const sorted = array => array.sort((a, b) => a.time < b.time);

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={entries}
                    keyExtractor={item => moment(item.date).format()}
                    renderItem={({ item, index }) => (
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
                                                <View style={styles.item}>
                                                    <Text style={styles.itemText}>{item.duration} minutes</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity
                                                style={{ alignSelf: 'center' }}
                                                onPress={() => this.props.onDeletePlaytime(moment(item.time).format())}
                                            >
                                                <Icon name='ios-trash' color='red' size={30} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            />
                            <Text style={styles.totalText}>Total: {item.playtimeTarget.fulfilled} / {item.playtimeTarget.target} minutes</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        flex: 1,
        paddingTop: 12,
        width: '100%'
    },
    list: {
        width: '80%'
    },
    entry: {
        marginTop: 12,
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 16
    },
    date: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginBottom: 8
    },
    dateText: {
        fontSize: 24
    },
    nestedItem: {
        marginTop: 4,
        marginBottom: 4
    },
    totalText: {
        textAlign: 'right'
    }
})

const mapStateToProps = state => {
    return {
        entries: state.playtime.entries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlaytime: (playtime) => dispatch(deletePlaytime(playtime))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaytimeLogScreen);