import React from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';

export class SliderComponent extends React.Component {
    state = {
        value: 20,
    };

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({value})}
                />
                <Text>Value: {this.state.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

AppRegistry.registerComponent('SliderComponent', () => SliderComponent);