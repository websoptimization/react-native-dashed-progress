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
          radius={30}
          strokeThickness={2}
        />
        <DashedProgress
          fill={50}
          countBars={100}
          radius={70}
          divideEnabled={true}
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
