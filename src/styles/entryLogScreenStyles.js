import { StyleSheet } from 'react-native';

import theme from './theme';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.primary,
        flex: 1,
        paddingTop: 12,
        width: '100%'
    },
    list: {
        width: '80%'
    },
    entry: {
        marginTop: 12,
        width: '100%'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 16
    },
    date: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginBottom: 8
    },
    dateText: {
        fontSize: 24
    },
    nestedItem: {
        marginTop: 4,
        marginBottom: 4
    },
    totalText: {
        textAlign: 'right'
    }
});