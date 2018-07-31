import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import moment from 'moment';

import Button from '../../Button';
import { Header } from '../../UI/typography';
import { addPlaytime } from '../../../store/entryActions';

class PlaytimeForm extends Component {
    state = {
        duration: 0,
        isDateTimePickerVisible: false,
        date: new Date()
    }

    toggleDateTimePicker = () => this.setState({
        isDateTimePickerVisible: !this.state.isDateTimePickerVisible
    });

    handleDatePicked = (date) => {
        this.setState({ date });
        this.toggleDateTimePicker();
    };

    newEntry = () => {
        if (this.state.duration === null) {
            return;
        }

        const playtimeEntry = {
            date: moment(this.state.date),
            duration: this.state.duration
        }

        this.props.onAddPlaytime(playtimeEntry);
        this.props.returnToProfile();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toggleDateTimePicker}>
                    <Text>{this.state.date.toDateString()}</Text>
                </TouchableOpacity>
                <DateTimePicker
                    mode='datetime'
                    maximumDate={new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.toggleDateTimePicker}
                />
                <Header style={styles.type}>How long did you play?</Header>
                <TextInput
                    style={styles.input}
                    value={this.state.quantity}
                    placeholder='Enter number of minutes'
                    keyboardType='number-pad'
                    maxLength={3}
                    onChangeText={(value) => this.setState({ duration: value })}
                />
                <Button type='Default' onPress={this.newEntry}>Submit</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        width: '80%'
    },
    type: {
        marginTop: 16
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 24,
        marginBottom: 12,
        marginTop: 12,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        width: '100%'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlaytime: (playtime) => dispatch(addPlaytime(playtime))
    }
}

export default connect(null, mapDispatchToProps)(PlaytimeForm);