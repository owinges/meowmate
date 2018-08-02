import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { Row } from '../components/UI/grid';
import { Header, Subheading } from '../components/UI/typography';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

import { checkFeedingTarget } from '../store/entryActions';

class CatDetailsScreen extends Component {
    state = {
        name: 'Miqo',
        dateOfBirth: new Date(),
        weight: 5,
        feedingTarget: 100,
        playtimeTarget: 60
    }

    render() {
        const { age, feedingTarget, name, playtimeTarget, weight } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <TextInput placeholder='Name' />
                    <TextInput placeholder='Date of Birth' />
                    <TextInput placeholder='Weight in kg' />
                    <TextInput placeholder='Daily feeding target in grams' />
                    <TextInput placeholder='Daily playing target in minutes' />
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
        feedingTarget: state.feeding.feedingTarget,
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

export default connect(mapStateToProps, mapDispatchToProps)(CatDetailsScreen);