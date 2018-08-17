import { StyleSheet } from 'react-native';

import theme from './theme';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.primary,
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        borderColor: '#eee',
        borderRadius: 125,
        borderWidth: 4,
        height: 150,
        marginBottom: 2,
        overflow: 'hidden',
        width: 150
    },
    image: {
        height: '100%',
        width: '100%'
    },
    age: {
        alignItems: 'center',
        backgroundColor: theme.tertiary,
        flexDirection: 'column',
        height: 60,
        justifyContent: 'center',
        width: '50%'
    },
    weight: {
        alignItems: 'center',
        backgroundColor: theme.tertiary,
        flexDirection: 'column',
        height: 60,
        justifyContent: 'center',
        width: '50%'
    },
    progressBarContainer: {
        marginTop: 20
    },
    progressBarHeader: {
        fontSize: 24,
        marginBottom: 12,
        textAlign: 'center'
    },
    header: {
        marginTop: 8
    },
    infoBox: {
        backgroundColor: theme.secondary,
        borderRadius: 10,
        height: '50%',
        overflow: 'hidden',
        width: '90%'
    },
    subheading: {
        marginTop: 8
    },
    modalOpener: {
        bottom: 20,
        left: '42%',
        position: 'absolute',
    },
    entryLogOpener: {
        bottom: 25,
        right: 20,
        position: 'absolute',
    },
    nameContainer: {
        marginBottom: 12
    }
});