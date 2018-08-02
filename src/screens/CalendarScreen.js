import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { connect } from 'react-redux';
import moment from 'moment';

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

        this.props.entries.forEach(entry => {
            markedDates = {
                ...markedDates,
                [moment(entry.date).format('YYYY-MM-DD')]: { marked: true }
            }
        });

        return markedDates;
    }

    selectDate = dateString => {

        const date = this.props.entries.findIndex(entry => {
            return moment(entry.date).isSame(moment(dateString), 'day');
        })

        this.setState({ selectedDate: dateString });

        if (date !== -1) {
            this.setState({ selectedDateInfo: this.props.entries[date] })
        } else {
            this.setState({ selectedDateInfo: {} });
        }

        console.log(this.state.markedDates);
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
                    {this.state.selectedDateInfo.data ? (
                        <View>
                            <Text>
                                {moment(this.state.selectedDateInfo.date).format('DD/MM/YYYY - dddd')}
                            </Text>
                            <FlatList
                                keyExtractor={item => moment(item.time).format()}
                                data={this.state.selectedDateInfo.data}
                                renderItem={({ item }) => (
                                    <View>
                                        <View>
                                            <View>
                                                {console.log(item)}
                                                <Text>{moment(item.time).format('hh:mm A')}</Text>
                                                <Text>{item.foodType}</Text>
                                                <Text>{item.quantity} g</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
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
        justifyContent: 'center'
    }
})

const mapStateToProps = state => {
    return {
        entries: state.feeding.entries
    }
}

export default connect(mapStateToProps, null)(CalendarScreen);