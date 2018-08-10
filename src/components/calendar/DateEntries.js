import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

export default class DateEntries extends Component {
    state = {
        selectedTab: 'feeding'
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.tabs}>
                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'feeding' })}>
                        <Text style={styles.tabText}>Feeding</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'playtime' })}>
                        <Text style={styles.tabText}>Playtime</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab} onPress={() => this.setState({ selectedTab: 'pooping' })}>
                        <Text style={styles.tabText}>Pooping</Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {moment(this.props.entries.feeding.date).format('DD/MM/YYYY - dddd')}
                </Text>
                <View style={styles.listContainer}>
                    {this.props.entries.feeding ? (
                        <FlatList
                            style={[styles.list, { display: this.state.selectedTab === 'feeding' ? 'flex' : 'none' }]}
                            keyExtractor={item => moment(item.time).format()}
                            data={this.props.entries.feeding.data}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <Text>{moment(item.time).format('hh:mm A')}</Text>
                                    <Text>{item.foodType}</Text>
                                    <Text>{item.quantity} g</Text>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={{ display: this.state.selectedTab === 'feeding' ? 'flex' : 'none' }}>There are no feeding entries.</Text>
                    )}
                    {this.props.entries.playtime ? (
                        <FlatList
                            style={[styles.list, { display: this.state.selectedTab === 'playtime' ? 'flex' : 'none' }]}
                            keyExtractor={item => moment(item.time).format()}
                            data={this.props.entries.playtime.data}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <Text>{moment(item.time).format('hh:mm A')}</Text>
                                    <Text>{item.duration} minutes</Text>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={{ display: this.state.selectedTab === 'playtime' ? 'flex' : 'none' }}>There are no playtime entries.</Text>
                    )}
                    {this.props.entries.pooping ? (
                        <FlatList
                            style={[styles.list, { display: this.state.selectedTab === 'pooping' ? 'flex' : 'none' }]}
                            keyExtractor={item => moment(item.time).format()}
                            data={this.props.entries.feeding.data}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <Text>{moment(item.time).format('hh:mm A')}</Text>
                                    <Text>{item.consistency}</Text>
                                </View>
                            )}
                        />
                    ) : (
                        <Text style={{ display: this.state.selectedTab === 'pooping' ? 'flex' : 'none' }}>There are no pooping entries.</Text>
                    )}
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
        marginTop: 20,
        width: '100%'
    },
    listContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: 200
    },
    list: {
        // backgroundColor: 'red'
    },
    listItem: {
        marginBottom: 10,
        marginTop: 10
    },
    tab: {
        borderColor: '#bbb',
        borderRadius: 10,
        borderWidth: 1,
        width: '30%'
    },
    tabText: {
        textAlign: 'center'
    }
})