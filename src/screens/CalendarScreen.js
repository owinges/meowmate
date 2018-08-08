import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { connect } from 'react-redux';
import moment from 'moment';

import DateEntries from '../components/calendar/DateEntries';

class CalendarScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: 'No date selected',
            selectedDateInfo: {},
            markedDates: this.getMarkedDates()
        }
    }

    getMarkedDates = () => {
        let markedDates = {};

        this.props.feedingEntries.forEach(entry => {
            markedDates = {
                ...markedDates,
                [moment(entry.date).format('YYYY-MM-DD')]: { marked: true }
            }
        });

        return markedDates;
    }

    selectDate = dateString => {

        const feedingDate = this.props.feedingEntries.findIndex(entry => {
            return moment(entry.date).isSame(moment(dateString), 'day');
        })

        const playtimeDate = this.props.playtimeEntries.findIndex(entry => {
            return moment(entry.date).isSame(moment(dateString), 'day');
        })

        const poopingDate = this.props.poopingEntries.findIndex(entry => {
            return moment(entry.date).isSame(moment(dateString), 'day');
        })

        this.setState({ selectedDate: dateString });

        if (feedingDate !== -1) {
            this.setState({
                selectedDateInfo: {
                    feeding: this.props.feedingEntries[feedingDate],
                    playtime: this.props.playtimeEntries[playtimeDate],
                    pooping: this.props.poopingEntries[poopingDate]
                }
            });
        } else {
            this.setState({ selectedDateInfo: {} });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Calendar
                    style={styles.calendar}
                    onDayPress={day => this.selectDate(day.dateString)}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    markedDates={{
                        ...this.state.markedDates,
                        [this.state.selectedDate]: { selected: true }
                    }}
                />
                <View style={styles.infoBox}>
                    {this.state.selectedDateInfo.feeding ? (
                        <DateEntries entries={this.state.selectedDateInfo} />
                    ) : (
                        <Text>Nothing to display</Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    calendar: {
    },
    infoBox: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    }
})

const mapStateToProps = state => {
    return {
        feedingEntries: state.feeding.entries,
        playtimeEntries: state.playtime.entries,
        poopingEntries: state.pooping.entries
    }
}

export default connect(mapStateToProps, null)(CalendarScreen);