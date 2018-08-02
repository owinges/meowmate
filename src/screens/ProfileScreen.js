import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import moment from 'moment';

import { Row } from '../components/UI/grid';
import { Header, Subheading } from '../components/UI/typography';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

import { checkFeedingTarget } from '../store/entryActions';
import logTabs from './logTabs';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

        this.state = {
            feedingTarget: {
                target: 0,
                fulfilled: 0
            }
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

    getDaysFeedingTarget = () => {
        const today = moment();

        const index = this.props.feedingEntries.findIndex(entry => {
            return moment(entry.date).isSame(today, 'day');
        })

        this.setState({
            feedingTarget: {
                target: this.props.feedingEntries[index].feedingTarget.target,
                fulfilled: this.props.feedingEntries[index].feedingTarget.fulfilled
            }
        });
    }

    componentWillMount() {
        this.props.onCheckFeedingTarget();
    }

    componentDidMount() {
        this.getDaysFeedingTarget();
    }

    render() {
        const { feedingTarget } = this.state;
        const { age, name, playtimeTarget, weight } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://sopurrfect.com/wp-content/uploads/2016/06/SoPurrfect-What-You-Need-To-Know-About-Owning-A-Ragdoll-Cat-.jpg' }} />
                </View>
                <View style={styles.headingContainer}>
                    <Header style={styles.header}>{name}</Header>
                    <Row>
                        <Subheading style={styles.subheading}>{age}</Subheading>
                        <Subheading style={styles.subheading}>{weight}</Subheading>
                    </Row>
                    <ProgressBar title='Food target' progress={feedingTarget} color='red' />
                    <ProgressBar title='Play target' progress={playtimeTarget} color='blue' />
                </View>
                <View style={styles.modalOpener}>
                    <Button style='FAB' onPress={this.displayModal}>
                        <Icon
                            name={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                            size={60}
                        />
                    </Button>
                </View>
                <View style={styles.entryLogOpener}>
                    <Button style='default' onPress={this.displayEntryLog}>
                        <Text>Entry Log</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        borderColor: '#eee',
        borderRadius: 125,
        borderWidth: 4,
        height: 250,
        marginBottom: 30,
        marginTop: 20,
        overflow: 'hidden',
        width: 250
    },
    image: {
        height: '100%',
        width: '100%'
    },
    headingContainer: {
        alignItems: 'center',
        backgroundColor: 'moccasin',
        flex: 1,
        width: '100%'
    },
    header: {
        marginTop: 8
    },
    subheading: {
        marginTop: 8
    },
    modalOpener: {
        bottom: 20,
        left: 20,
        position: 'absolute',
    },
    entryLogOpener: {
        bottom: 25,
        right: 20,
        position: 'absolute',
    }
});

const mapStateToProps = state => {
    return {
        age: state.cat.age,
        feedingEntries: state.feeding.entries,
        name: state.cat.name,
        playtimeTarget: state.playtime.playtimeTarget,
        weight: state.cat.weight
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckFeedingTarget: () => dispatch(checkFeedingTarget())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);