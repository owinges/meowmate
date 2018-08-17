import React, { Component } from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-recur';

import { Row, Column } from '../components/UI/grid';
import { Header, Subheading } from '../components/UI/typography';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/profileScreenStyles';
import theme from '../styles/theme';

import { checkFeedingTarget, checkPlaytimeTarget } from '../store/entryActions';
import logTabs from './logTabs';

class ProfileScreen extends Component {
    static navigatorStyle = {
        navBarBackgroundColor: theme.tertiary
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.state = {
            feedingTarget: {
                target: 0,
                fulfilled: 0
            },
            playtimeTarget: {
                target: 0,
                fulfilled: 0
            },
            daysUntilDeworming: 0
        }
    }

    onNavigatorEvent = event => {
        const toggleDrawer = () => {
            this.props.navigator.toggleDrawer({
                side: 'right'
            });
        }

        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                toggleDrawer();
            }
        } else if (event.type == 'DeepLink') {
            if (event.link === 'Calendar') {
                toggleDrawer();
                this.props.navigator.push({
                    screen: 'meowmate.CalendarScreen',
                    title: 'Calendar'
                });
            } else if (event.link === 'EntryLog') {
                toggleDrawer();
                logTabs();
            } else if (event.link === 'CatDetails') {
                toggleDrawer();
                this.props.navigator.push({
                    screen: 'meowmate.CatDetailsScreen',
                    title: 'Cat Details'
                });
            }
        }
    }

    displayModal = () => {
        Navigation.showModal({
            screen: 'meowmate.AddEntryScreen',
            title: 'Add an entry',
            animationType: 'slide-up'
        });
    }

    displayEntryLog = () => {
        logTabs();
    }

    getDaysTargetValues = (props) => {
        const today = moment();

        const indexFeeding = props.feedingEntries.findIndex(entry => {
            return moment(entry.date).isSame(today, 'day');
        })

        const indexPlaytime = props.playtimeEntries.findIndex(entry => {
            return moment(entry.date).isSame(today, 'day');
        })

        this.setState({
            feedingTarget: {
                target: props.feedingEntries[indexFeeding].feedingTarget.target,
                fulfilled: props.feedingEntries[indexFeeding].feedingTarget.fulfilled
            },
            playtimeTarget: {
                target: props.playtimeEntries[indexPlaytime].playtimeTarget.target,
                fulfilled: props.playtimeEntries[indexPlaytime].playtimeTarget.fulfilled
            }
        });
    }

    componentWillReceiveProps(newProps) {
        this.getDaysTargetValues(newProps);
    }

    componentWillMount() {
        this.props.onCheckFeedingTarget();
        this.props.onCheckPlaytimeTarget();
        this.getDaysUntilNextTreatment();
    }

    getDaysUntilNextTreatment = () => {
        // Set monthly recurrence based on start date from Redux state
        let recurrence = moment(this.props.healthEntries.deworming[0].startDate).recur().every(1).month();
        let today = moment();
        let nextDay = recurrence.next(1)[0]; // Returns array of next dates
        // Get the difference between next date and today
        this.setState({ daysUntilDeworming: nextDay.diff(today, 'days') });
    }

    render() {
        const { feedingTarget, playtimeTarget, daysUntilDeworming } = this.state;
        const { age, name, weight } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://sopurrfect.com/wp-content/uploads/2016/06/SoPurrfect-What-You-Need-To-Know-About-Owning-A-Ragdoll-Cat-.jpg' }} />
                </View>
                <View style={styles.nameContainer}>
                    <Header style={styles.header}>{name} Poo</Header>
                </View>
                <View style={styles.infoBox}>
                    <Row>
                        <Column style={styles.age}>
                            <Header>8</Header>
                            <Subheading style={styles.subheading}>MONTHS</Subheading>
                        </Column>
                        <Column style={styles.weight}>
                            <Header>4.5</Header>
                            <Subheading style={styles.subheading}>KILOS</Subheading>
                        </Column>
                    </Row>
                    <View style={styles.progressBarContainer}>
                        <Header style={styles.progressBarHeader}>Daily Targets</Header>
                        <ProgressBar title='Food' progress={feedingTarget} color='red' />
                        <ProgressBar title='Play' progress={playtimeTarget} color='blue' />
                    </View>
                </View>
                <View style={styles.modalOpener}>
                    <Button style='FAB' onPress={this.displayModal}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-paw' : 'ios-paw'}
                            size={50}
                        />
                    </Button>
                </View>
                {/* <View style={styles.entryLogOpener}>
                    <Button style='default' onPress={this.displayEntryLog}>
                        <Text>Entry Log</Text>
                    </Button>
                </View> */}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        age: state.cat.age,
        feedingEntries: state.feeding.entries,
        healthEntries: state.health.entries,
        name: state.cat.name,
        playtimeEntries: state.playtime.entries,
        weight: state.cat.weight
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckFeedingTarget: () => dispatch(checkFeedingTarget()),
        onCheckPlaytimeTarget: () => dispatch(checkPlaytimeTarget())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);