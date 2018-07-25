import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class EntryLogScreen extends Component {
    render() {
        const { feeding } = this.props;

        return (
            <View style={styles.container}>
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
        feeding: state.entry.feeding
    }
}

export default connect(mapStateToProps, null)(EntryLogScreen);