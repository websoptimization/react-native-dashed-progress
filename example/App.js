import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {DashedProgress} from 'react-native-dashed-progress';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <DashedProgress
          fill={20}
          countBars={50}
          radius={50}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
