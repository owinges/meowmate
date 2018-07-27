import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const Button = props => {
    switch (props.style) {
            case 'FAB':
                return (
                    <TouchableOpacity onPress={props.onPress}>
                        <View style={styles.FAB}>
                            <Text>{props.children}</Text>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return (
                    <TouchableOpacity onPress={props.onPress}>
                        <View style={styles.default}>
                            <Text style={styles.defaultText}>{props.children}</Text>
                        </View>
                    </TouchableOpacity>
                );
    }
}

const styles = StyleSheet.create({
    default: {
        borderColor: '#222',
        borderRadius: 10,
        borderWidth: 2,
        paddingBottom: 6,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 6
    },
    defaultText: {
        fontSize: 24,
        textAlign: 'center'
    },
    FAB: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderColor: 'blue',
        borderRadius: 40,
        borderWidth: 2,
        height: 60,
        justifyContent: 'center',
        width: 60
    }
})

export default Button;