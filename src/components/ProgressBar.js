import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Row } from './UI/grid';

export default class ProgressBar extends Component {
    render() {

        const { color, progress, title } = this.props;

        let titleText = null;

        if (title) {
            titleText = (
                <Row style={{ marginBottom: 8, marginTop: 8 }}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ flex: 1 }}></View>
                    <Text style={styles.counter}>{`${progress.fulfilled}/${progress.target}`}</Text>
                </Row>
            );
        }

        return (
            <React.Fragment>
                {titleText}
                <Row>
                    <View style={styles.container}>
                        <View style={[
                            styles.bar,
                            { backgroundColor: color, width: `${progress.fulfilled / progress.target * 100}%` }
                        ]}></View>
                    </View>
                </Row>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        borderColor: '#ccc',
        borderRadius: 20,
        borderWidth: 2,
        height: 20,
        overflow: 'hidden',
        width: '80%'
    },
    bar: {
        height: '100%'
    },
    title: {
        marginLeft: '10%'
    },
    counter: {
        marginRight: '10%'
    }
})