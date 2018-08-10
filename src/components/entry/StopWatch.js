import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import 'moment-timer';

import Button from '../Button';

export default class Stopwatch extends Component {
    state = {
        isRunning: false,
        stopwatch: null,
        timer: 0
    }

    timerToggle = () => {
        const { isRunning } = this.state;

        if (isRunning) {
            this.state.stopwatch.stop();
            this.setState({ isRunning: !isRunning });
            this.props.setDuration(this.state.timer);
        } else {
            if (this.state.stopwatch === null) {
                this.setState({
                    isRunning: !isRunning,
                    stopwatch: new moment.duration(1000).timer({ loop: true }, () => {
                        this.setState({ timer: this.state.timer + 1 });
                    })
                });
            } else {
                this.setState({ isRunning: !isRunning });
                this.state.stopwatch.start();
            }
        }
    }

    handleReset = () => {
        this.state.stopwatch.stop();
        this.setState({
            isRunning: false,
            stopwatch: null,
            timer: 0
        });
    }

    formatTime = () => {
        let seconds = this.state.timer;
        const minutes = parseInt(seconds / 60);
        seconds = seconds % 60;

        let output = '';
        
        if (minutes < 10) {
            output += `0${minutes}:`;
        } else {
            output += `${minutes}:`;
        }

        if (seconds < 10) {
            output += `0${seconds}`;
        } else {
            output += `${seconds}`;
        }

        return output;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timer}>
                    <Text style={styles.timerText}>{this.formatTime()}</Text>
                </View>
                <View style={styles.buttons}>
                    <Button style='FAB' onPress={this.timerToggle}>
                        <Text>{this.state.isRunning ? 'STOP' : 'START'}</Text>
                    </Button>
                    <Button style='FAB' onPress={this.handleReset}>
                        <Text>RESET</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
        marginTop: 20,
        width: '60%'
    },
    timer: {},
    timerText: {
        fontSize: 58,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    }
})