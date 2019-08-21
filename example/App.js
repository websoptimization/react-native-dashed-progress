import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {DashedProgress} from 'react-native-dashed-progress';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <DashedProgress
          fill={20}
          countBars={50}
          radius={50}
          strokeThickness={2}
        />
        <DashedProgress
          fill={this.state.fill}
          countBars={100}
          radius={50}
          divideEnabled={true}
          strokeColor="#00e0ff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
