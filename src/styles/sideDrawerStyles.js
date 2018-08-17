import { StyleSheet } from 'react-native';

import theme from './theme';

export default StyleSheet.create({
    container: {
        backgroundColor: theme.primary,
        flex: 1,
        paddingTop: 50
    },
    drawerItem: {
        alignItems: 'center',
        backgroundColor: theme.tertiary,
        flexDirection: 'row',
        marginBottom: 6,
        padding: 10
    },
    drawerItemIcon: {
        marginLeft: 10,
        marginRight: 16
    }
})