import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import moment from 'moment';

export default class List extends Component {
    state = {
        entries: this.props.data
    }

    displayList = () => {
        switch (this.props.type) {
            case 'feeding':
                return (
                    <FlatList
                        keyExtractor={item => moment(item.time).format()}
                        data={this.state.entries.feeding.data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{moment(item.time).format('hh:mm A')}</Text>
                                <Text>{item.foodType}</Text>
                                <Text>{item.quantity} g</Text>
                            </View>
                        )}
                    />
                );
            case 'playtime':
                return (
                    <FlatList
                        keyExtractor={item => moment(item.time).format()}
                        data={this.state.entries.playtime.data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{moment(item.time).format('hh:mm A')}</Text>
                                <Text>{item.duration} minutes</Text>
                            </View>
                        )}
                    />
                );
            case 'pooping':
                return (
                    <FlatList
                        keyExtractor={item => moment(item.time).format()}
                        data={this.state.entries.pooping.data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{moment(item.time).format('hh:mm A')}</Text>
                                <Text>{item.consistency}</Text>
                            </View>
                        )}
                    />
                );
            default:
                return <Text>Select a tab</Text>;
        }
    }
    
    render() {
        return this.displayList();
    }
}