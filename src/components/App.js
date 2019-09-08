import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';



const App = ({ number, day, title, plus, minus, asyncMinus }) => (
  <View>
    <Text>
      {title} {number} {day}
    </Text>
    <Button title="+"
      onPress={() => {
        plus(100);
      }}
     />
    <Button title="-"
      onPress={() => {
        minus(10);
      }}
    />

    <Button title="async"
      onPress={() => {
        asyncMinus(10);
      }}
    />
  </View>
);

export default App;