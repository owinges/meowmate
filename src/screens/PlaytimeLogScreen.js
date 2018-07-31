import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class PlaytimeLogScreen extends Component {
    static navigatorButtons = {
        leftButtons: [
            {
                title: 'Back',
                id: 'back'
            }
        ]
    };

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress') {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'meowmate.ProfileScreen',
                    title: 'MeowMate'
                }
            });
        }
    }

    render() {
        // Sort entries by month in descending order
        const entries = this.props.entries.sort((a, b) => a.date < b.date);

        // Function for sorting entries by time in descending order
        const sorted = array => array.sort((a, b) => a.time < b.time);

        const getTotalDuration = index => {
            let total = 0;

            entries[index].data.forEach(entry => {
                total += entry.duration;
            })

            return total;
        }

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={entries}
                    keyExtractor={item => item.date.format()}
                    renderItem={({ item, index }) => (
                        <View style={styles.entry}>
                            <View style={styles.date}>
                                <Text style={styles.dateText}>
                                    {item.date.format('DD/MM/YYYY - dddd')}
                                </Text>
                            </View>
                            <FlatList
                                keyExtractor={item => item.time.format()}
                                data={sorted(item.data)}
                                renderItem={({ item }) => (
                                    <View style={styles.nestedItem}>
                                        <Text>{item.time.format('hh:mm A')}</Text>
                                        <View style={styles.item}>
                                            <Text style={styles.itemText}>Duration:</Text>
                                            <Text style={styles.itemText}>{item.duration} minutes</Text>
                                        </View>
                                    </View>
                                )}
                            />
                            <Text>Total: {getTotalDuration(index)} minutes</Text>
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
    }
})

const mapStateToProps = state => {
    return {
        entries: state.playtime.entries
    }
}

export default connect(mapStateToProps, null)(PlaytimeLogScreen);