import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Fact: React.FC<{text: string}> = ({text}) => <View style={styles.item}>
        <Text style={styles.title}>
            {text}
        </Text>
    </View>

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 12,
        color: 'black'
    },
});

export default Fact;