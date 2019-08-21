# react-native-dashed-progress
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/react-native-dashed-progress.svg)](https://www.npmjs.com/package/react-native-dashed-progress)
[![npm](https://img.shields.io/npm/dt/react-native-dashed-progress.svg)](https://www.npmjs.com/package/react-native-dashed-progress)


React Native component to draw circular dashed progress bar.

## Example

![image](screenshot.gif)

## Installation

1. Install `react-native-dashed-progress`component:

    `npm install --save react-native-dashed-progress`
    
    skip step 2 if you are using react-native >= 0.60

2. Link native code for SVG:

    `react-native link react-native-svg`

## Usage
```js
import {DashedProgress} from 'react-native-dashed-progress';

<DashedProgress
  fill={20} 
  countBars={50} 
  radius={50}
  strokeColor="#00e0ff"/>
```

## Props

| Props            | Type                        | Default   | Description                                     |
| ---------------- | :-------------------------- | --------- |------------------------------------------------ |
| radius           | Number                      | 100       | Radius of circle
| barWidth         | Number                      | 10        | Length of dash
| indicatorWidth   | Number                      | 20        | Length of indicator
| countBars        | Number                      | 100       | Total number of dashes in circle
| strokeThickness  | Number                      | 1         | Thickness of dash
| fill             | Number (>=0 and <=countBars)| 50        | Total number of filled Dashes in circle
| text             | String                      | 50%       | A Text will display in the circle
| strokeLinecap    | String                      | round     | Shape used at ends of dash. Possible values: butt,round, square                                                           
| trailColor       | String                      | #000000   | Color of unfilled dashes
| strokeColor      | String                      | #008000   | Color of filled dashes
| showTooltip      | Boolean                     | true      | Enabled to display Text inside the circle
| tooltipSize      | Number                      | 12        | fontSize of text
| tooltipColor     | String                      | #008000   | fontColor of text
| tooltipFamily    | String                      |           | fontFamily of text
| divideEnabled    | Boolean                     | false     | Enabled to divide countBars into given dividerNumber
| dividerNumber    | Number                      | 10        | Number which will divide by countBars
| dividerNumberSize| Number                      | 9         | fontSize of dividerNumber
| showIndicator    | Boolean                     | true      | Enabled to display stop indicator in animated Circle
| indicatorColor   | String                      | #008000   | Color of indicator
| duration         | Number                      | 1000      | Total time to animate dashes
| containerStyle   | Object                      |           | Extra styling for the main container


## Running example app

```sh
git clone https://github.com/websoptimization/react-native-dashed-progress.git
cd react-native-dashed-progress/example
npm install
react-native-run-android OR react-native-run-ios
```

## License

MIT

