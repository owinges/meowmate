import React, { Component } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { Row } from '../components/UI/grid';
import { Header, Subheading } from '../components/UI/typography';
import ProgressBar from '../components/ProgressBar';

class ProfileScreen extends Component {
    displayModal = () => {
        Navigation.showModal({
            screen: 'meowmate.AddEntryScreen',
            title: 'Add an entry',
            animationType: 'slide-up'
        });
    }

    render() {
        const { age, name, weight } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://sopurrfect.com/wp-content/uploads/2016/06/SoPurrfect-What-You-Need-To-Know-About-Owning-A-Ragdoll-Cat-.jpg' }} />
                </View>
                <View style={styles.headingContainer}>
                    <Header>{name}</Header>
                    <Row>
                        <Subheading>{age}</Subheading>
                        <Subheading>{weight}</Subheading>
                    </Row>
                    <ProgressBar title='Food target' progress={50} color='red' />
                    <ProgressBar title='Play target' progress={50} color='blue' />
                    <Row>
                        <Button title='Press me!' onPress={this.displayModal} />
                    </Row>
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
        marginTop: 30,
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
    }
});

const mapStateToProps = state => {
    return {
        age: state.cat.age,
        name: state.cat.name,
        weight: state.cat.weight
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeAge: (age) => dispatch(changeAge(age)),
        onChangeName: (name) => dispatch(changeName(name)),
        onChangeWeight: (weight) => dispatch(changeWeight(weight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);