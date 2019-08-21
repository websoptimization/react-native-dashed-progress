import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {DashedProgress} from 'react-native-dashed-progress';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <DashedProgress
          fill={20}
          strokeThickness={2}
          countBars={50}
          radius={40}
          showIndicator={false}
          strokeColor="red"
          tooltipColor="black"
        />
        <DashedProgress
          fill={40}
          countBars={50}
          radius={50}
          strokeThickness={2}
          trailColor="orange"
        />
        <DashedProgress
          fill={60}
          strokeThickness={2}
          countBars={100}
          radius={70}
          divideEnabled={true}
          indicatorColor="blue"
          tooltipColor="blue"
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
