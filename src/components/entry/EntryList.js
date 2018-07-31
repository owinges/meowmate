import React from 'react';
import { StyleSheet } from 'react-native';

import ListItem from './ListItem';

import { Column, Row } from '../UI/grid';

const EntryList = ({ showForm }) => (
    <React.Fragment>
        <Row style={styles.row}>
            <Column style={styles.column}>
                <ListItem icon='pizza' title='Feeding' showForm={showForm} />
            </Column>
            <Column style={styles.column}>
                <ListItem icon='happy' title='Playtime' showForm={showForm} />
            </Column>
            <Column style={styles.column}>
                <ListItem icon='cloud' title='Pooping' showForm={showForm} />
            </Column>
        </Row>
        <Row style={styles.row}>
            <Column style={styles.column}>
                <ListItem icon='medkit' title='Vet visit' showForm={showForm} />
            </Column>
            <Column style={styles.column}>
                <ListItem icon='color-filter' title='Deworming' showForm={showForm} />
            </Column>
            <Column style={styles.column}>
                <ListItem icon='flask' title='Medicine' showForm={showForm} />
            </Column>
        </Row>
    </React.Fragment>
);

const styles = StyleSheet.create({
    column: {
        height: 100,
        width: '30%'
    },
    row: {
        marginTop: 12
    }
});

export default EntryList;