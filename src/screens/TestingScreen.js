import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { addEntry, changeType } from '../store/entryActions';

class TestingScreen extends Component {

    state = {
        type: 'TEST'
    }

    newEntry = () => {
        this.props.onAddEntry({
            key: Math.random().toString(),
            date: new Date(),
            foodType: 'Wet food',
            quantity: '10 grams'
        });
    }
    render() {
        const { feeding, type } = this.props;

        return (
            <View style={styles.container}>
                <Text>{type}</Text>
                <FlatList
                    data={feeding}
                    renderItem={({ item }) => (
                        <View style={styles.test}>
                            <Text>{item.date.toDateString()}</Text>
                            <Text>{item.foodType}</Text>
                            <Text>{item.quantity}</Text>
                        </View>
                    )}
                />
                <Button title='Add entry' onPress={this.newEntry}/>
                <Button title='Change type' onPress={() => this.props.onChangeType(this.state.type)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        flex: 1,
        paddingTop: 12
    }
})

const mapStateToProps = state => {
    return {
        feeding: state.entry.feeding,
        type: state.entry.type
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddEntry: (entry) => dispatch(addEntry(entry)),
        onChangeType: (type) => dispatch(changeType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestingScreen);