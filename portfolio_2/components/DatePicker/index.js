import React from 'react';
import { View, Text } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <View>
                    <Text>This is a test</Text>
                </View>
            </>
        );
    }
}